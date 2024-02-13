import os
from modules import ParseMap
from modules.Class import OsuMap
import re
import json

# 64 192 320 448
array = ""
osufile = json.loads(open("r.json", encoding="utf-8").read())

for line in osufile['hitObjects']:
	switch = {
		1 : '64' ,
		2 : '192' ,
		3 : '320' ,
		4 : '448' ,
	}
	column = switch[line['column']]
	time = line['startTime']
	toappend = f'{column},192,{time},1,0,0:0:0:0:'
	if (line['type'] == "hold"):
		endtime = line['endTime']
		toappend = f'{column},192,{time},128,0,{endtime}:0:0:0:0:'
	array += toappend + "\n"
print(array)
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
