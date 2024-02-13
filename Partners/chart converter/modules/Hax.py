from modules import ParseMap
import numpy
import re

def isslider(txt):
	c = txt[3]
	splitted = f'{int(c):08b}'
	return splitted[6] == "1" and splitted[7] == "0"

def colorhax(rosufile, stime, etime, patternf):
	toprint = ""
	osufile = rosufile.splitlines()
	r = ParseMap.ParseAllBeatmapData(osufile)
	parsed = ParseMap.ParseAllBeatmapData(osufile).hitobjects
	color = ParseMap.ParseAllBeatmapData(osufile).colors
	if color == []:
		print(Exception(f"Error running Colorhaxing Command. : No Combo Colors found in the map."))
		return ParseMap.AssembleBeatmapData(rosufile)
	coloramount = 0
	pattern = []
	if stime == "-":
		stime = int(parsed[0].split(",")[2])
	elif ":" in str(stime):
		stime = int(stime.split(":")[0]) * 60*1000 + int(stime.split(":")[1])*1000 + int(stime.split(":")[2])
	else:
		stime = int(stime)
	if etime == "-":
		etime = int(parsed[len(parsed)-1].split(",")[2])
	elif ":" in str(etime):
		etime = int(etime.split(":")[0]) * 60*1000 + int(etime.split(":")[1])*1000 + int(etime.split(":")[2])
	else:
		etime = int(etime)
	for l in patternf:
		pattern.append(int(l))
	for line in color:
		if line.startswith("Combo"):
			coloramount += 1
	patterncursor = 0
	nc = coloramount
	r.hitobjects = []
	w = 0
	oldcolors = []
	b = 0
	for line in parsed:
		rawsplitted = re.split(",", line)
		splitted = ""
		i = 0
		for element in rawsplitted:
			if i == 3:
				splitteddigit = rawsplitted[3]
				splitted = f'{int(splitteddigit):08b}'
			i += 1
		skip = int(splitted[1])*4 + int(splitted[2])*2 +  int(splitted[3])
		if splitted[5] == "1" and splitted[4] == "0":
			b += 1 + skip
		while b > coloramount:
			b -= coloramount
		oldcolors.append(b)
	previousnc = 0
	for line in parsed:
		rawsplitted = re.split(",", line)
		splitted = ""
		i = 0
		unneccessarybefore = ''
		unneccessaryafter = ''
		for element in rawsplitted:
			if i < 3:
				unneccessarybefore += element + ","
			elif i == 3:
				splitteddigit = rawsplitted[3]
				splitted = f'{int(splitteddigit):08b}'
			elif i > 3:
				unneccessaryafter += "," + element 
			i += 1
		skip = int(splitted[1])*4 + int(splitted[2])*2 +  int(splitted[3])
		toskip = 0
		if splitted[5] == "1" and splitted[4] == "0":
			while nc >= coloramount:
				nc = nc - coloramount
			toskip = None
			previousnc = nc
			if stime <= int(rawsplitted[2]) <= etime:
				expected = pattern[patterncursor]
			else:
				expected = oldcolors[w]
			while nc >= coloramount:
				nc -= coloramount
			if expected < previousnc :
				toskip = coloramount + expected - previousnc - 1
			elif expected > previousnc:
				toskip = expected - previousnc - 1
			elif expected == previousnc:
				toskip = coloramount-1
			nc = previousnc + toskip + 1

			if patterncursor >= len(pattern)-1:
				patterncursor = 0
			else:
				patterncursor += 1
		toprint = (unneccessarybefore + str(int(f'0{(toskip):03b}{splitted[4]}{splitted[5]}{splitted[6]}{splitted[7]}', 2)) + unneccessaryafter)
		r.hitobjects.append(toprint)
		w += 1
	return ParseMap.AssembleBeatmapData(r)

def colorburst(rosufile, stime, etime, patternf, snap):
	oosufile = rosufile
	snap = int(snap)
	osufile = rosufile.splitlines()
	oldprint = oosufile
	timing = ParseMap.ParseAllBeatmapData(osufile).timingpoints
	parsed = ParseMap.ParseAllBeatmapData(osufile).hitobjects
	difficulty = ParseMap.ParseAllBeatmapData(osufile).difficulty
	if stime == "-":
		stime = int(parsed[0].split(",")[2])
	elif ":" in str(stime):
		stime = int(stime.split(":")[0]) * 60*1000 + int(stime.split(":")[1])*1000 + int(stime.split(":")[2])
	else:
		stime = int(stime)
	if etime == "-":
		etime = int(parsed[len(parsed)-1].split(",")[2])
	elif ":" in str(etime):
		etime = int(etime.split(":")[0]) * 60*1000 + int(etime.split(":")[1])*1000 + int(etime.split(":")[2])
	else:
		etime = int(etime)
	for line in timing:
		if re.split(",", line)[6] == "1":
			bpm = round(float(re.split(",", line)[1]))
		elif int(re.split(",", line)[0]) > stime:
			break
	depth = 0
	burststart = None
	burstend = None
	svmul = 1
	for line in parsed:
		if etime >= int(line.split(",")[2]) >= stime:
			basesv = float(difficulty[4].split(":")[1])
			for l in timing:
				if int(l.split(",")[0]) > int(line.split(",")[2]):
					svmul = int(l[0])
					break
			rawsplitted = re.split(",", line)
			if burstend == None and burststart == None:
				svmuld = basesv * svmul * 100
				if (round(bpm / (int(rawsplitted[2]) - int(re.split(",", parsed[depth-1])[2]))) == snap):
					splitteddigit = rawsplitted[3]
					splitted = f'{int(splitteddigit):08b}'
					if (splitted[6] == "0"):
						burststart = re.split(",", parsed[depth-1])[2]
						burstend = int(burststart)
						for line2 in parsed:
								rawsplitted2 = re.split(",", line2)
								if (rawsplitted2[2] > burststart):
									if (round(bpm / (int(rawsplitted2[2]) - (int(burstend)))) == snap):
										burstend = rawsplitted2[2]
									else: 
										break
			else:
				oldprint = colorhax(oldprint, int(burststart), int(burstend), patternf)
				burststart = None
				burstend = None
			if isslider(rawsplitted):
					if (round(svmuld/snap) == round(float(rawsplitted[7]))):
						burststart = rawsplitted[2]
						burstend = rawsplitted[2]
						oldprint = colorhax(oldprint, int(burststart), int(burstend), patternf)
			depth += 1
	return oldprint


def bookmarkhax(rosufile, patternf):
	oosufile = rosufile
	osufile = rosufile.splitlines()
	oldprint = oosufile
	mapdata = ParseMap.ParseAllBeatmapData(osufile)
	timing = mapdata.timingpoints
	parsed = mapdata.hitobjects
	bookmarks = None
	colors = patternf.split("/")
	depth = 0
	colorscursor = 0
	for line in mapdata.editor:
		if line.startswith("Bookmarks:"):
			bookmarks = line.split(":")[1].split(",")
			for bm in bookmarks:
				if depth > 0:
					oldprint = colorhax(oldprint, int(bookmarks[depth-1]), int(bm), colors[colorscursor])
				else:
					oldprint = colorhax(oldprint, "-", int(bm), colors[colorscursor])
				depth += 1
				colorscursor += 1
				if colorscursor > len(colors)-1:
					colorscursor = 0
			oldprint = colorhax(oldprint, bookmarks[-1], "-", colors[colorscursor])
			break
	if bookmarks == None:
		print(Exception(f"Error running Bookmarks Colorhaxing Command. : No bookmarks found in the map."))
	return oldprint
