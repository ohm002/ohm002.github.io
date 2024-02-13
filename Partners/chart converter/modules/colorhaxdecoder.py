import os
import math
import json
import re
import shutil
from modules import Class, Hax, ParseMap

# a test if this will commit to the githuv wev

def pathparse(text):
	return [[i for i in text.split("\\") if i != text.split("\\")[-1]], text.split("\\")[-1]]

def mdd(text):
	return re.split(":", text)[1]

def Export(mapdata):
	if "(Exported)" in (mdd(mapdata.metadata[5])):
		return f"{mdd(mapdata.metadata[3])} - {mdd(mapdata.metadata[2])} ({mdd(mapdata.metadata[4])}) [{mdd(mapdata.metadata[5])}].osu"
	else:
		return f"{mdd(mapdata.metadata[3])} - {mdd(mapdata.metadata[2])} ({mdd(mapdata.metadata[4])}) [{mdd(mapdata.metadata[5])} (Exported)].osu"

def ParseHax(haxfile):
	osufile = None
	script = 0
	toprint = ""
	for line in haxfile:
		if line.startswith("#"):
			continue
		elif line.startswith("osufile"):
			osufile = (line.split("=")[1])	
			path = pathparse(osufile)
			print(f"LOG : Initialized osu! File = \""+ osufile.split('\\')[-1] + "\"")
			print()
			osufile = open(osufile, encoding="utf-8").read()
			continue
		elif line == "":
			continue
		else:
			# i tried using switch case but i didnt work :(
			li = (line.split("=")[1]).split(",")
			if line.startswith("colorhax"):
				if script > 0:
					toprint = Hax.colorhax(toprint, li[0], li[1], li[2])
				else:
					toprint = Hax.colorhax(osufile, li[0], li[1], li[2])
			elif line.startswith("colorburst"):
				if script > 0:
					toprint = Hax.colorburst(toprint, li[0], li[1], li[2],li[3])
				else:
					toprint = Hax.colorburst(osufile, li[0], li[1], li[2],li[3])
			elif line.startswith("bookmarkhax"):
				if script > 0:
					toprint = Hax.bookmarkhax(toprint, li[0])
				else:
					toprint = Hax.bookmarkhax(osufile, li[0])
			print(f"LOG : Succesfully Executed Script #{script + 1} ({line.split('=')[0].upper()})")
			script += 1
	mapdata = ParseMap.ParseAllBeatmapData(toprint.splitlines())
	pstr = ""
	for ele in path[0]:
		pstr += ele + "\\"
	with open(f'{pstr}{mdd(mapdata.metadata[2])} - {mdd(mapdata.metadata[0])} ({mdd(mapdata.metadata[4])}) [{mdd(mapdata.metadata[5])}].osu', 'w',encoding='utf-8') as f:
		f.write(toprint)
