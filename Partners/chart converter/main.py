import os
from modules import ParseMap
from modules.Class import OsuMap
import re
import json

# 64 192 320 448
array = {
	"hitObjects": [],
	"cursor": []
}
osufile = ParseMap.ParseAllBeatmapData(
	open(
		"4k.osu", encoding="utf-8").read().splitlines()
)
osufile2 = ParseMap.ParseAllBeatmapData(
	open(
		"c.osu", encoding="utf-8").read().splitlines()
)

for line in osufile.hitobjects:
	switch = {
		'64': 1,
		'192': 2,
		'320': 3,
		'448': 4,
		'0': 1,
		'128': 2,
		'256': 3,
		'384': 4,
	}
	column = switch[line.split(",")[0]]
	time = line.split(",")[2]
	endtime = line.split(",")[5]
	toappend = {
		"type": "note",
		"column": column,
		"startTime": int(time)
	}
	if (endtime.split(":")[0] != "0" and endtime.split(":")[0] != "1" ):
		toappend = {
			"type": "hold",
			"column": column,
			"startTime": int(time),
			"endTime": int(endtime.split(":")[0])
		}
	array["hitObjects"].append(toappend)
for line in osufile2.hitobjects:
	column = line.split(",")[0]
	y = line.split(",")[1]
	time = line.split(",")[2]
	type = 'ein' if y == '0' else 'eout' if y == '32' else 'linear' if y == '64' else "normal"
	# type = "normal"
	toappend = {
		"type": type, 
		"x": ((int(column) - 0) / (512 - 0)) * (1 - 0) + 0, 
		"startTime": int(time)
		}
	array["cursor"].append(toappend)
print(json.dumps(array))
# {
#   "audioPath": "https://cdn.discordapp.com/attachments/671324264531492878/1011673846052552805/audio.mp3",
#   "bgPath": "https://media.discordapp.net/attachments/1021719285766295593/1043831905197506570/bg.jpg?width=994&height=559",
#   "metadata": {
#     "title": "Particle Arts (Game Ver.)",
#     "titleUnicode": "Particle Arts (Game Ver.)",
#     "artist": "Virtual Self",
#     "artistUnicode": "Virtual Self",
#     "creator": "The Virtual Machine",
#     "difficult": "Easy"
#   },

#   "hitObjects": [
#     { "type": "hold", "column": 1, "startTime": 500, "endTime": 1000},
#     { "type": "hold", "column": 2, "startTime": 500, "endTime": 1000},
#     { "type": "hold", "column": 3, "startTime": 500, "endTime": 1000},
#     { "type": "hold", "column": 4, "startTime": 500, "endTime": 1000},
#     { "type": "hold", "column": 1, "startTime": 1500, "endTime": 2000},
#     { "type": "note", "column": 2, "startTime": 20000}
#   ],
#   "cursor": [
#     { "type": "normal", "x": 0.6, "startTime": 1000 }
#   ],
#   "timingPoints": [
#     {
#       "time": 500,
#       "bpm": 162,
#       "meter": 4,
#       "defaultSampleSet": "drum",
#       "volume": 100,
#       "mode": "2k"
#     }
#   ],
#   "speedChanges": []
# }
