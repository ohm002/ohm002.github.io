import os
import math
import json
import re
import shutil
from modules import Class, Hax, ParseMap, colorhaxdecoder
from modules.Class import OsuMap

def ParseAllBeatmapData(osufile):
	# General
	depth = 0
	linepos = 0
	DataGeneral = []
	for line in osufile:
		linepos += 1
		if line == "[General]":
			depth = linepos
		elif line == "[Editor]":
			# print(f"{depth+1} until {linepos-2}")
			searchdepthstart = depth+1
			searchdepthend = linepos
			for i in range(searchdepthstart-1, searchdepthend-1):
				if osufile[i] != "":
					DataGeneral.append(osufile[i])
			break
	# Editor
	depth = 0
	linepos = 0
	DataEditor = []
	for line in osufile:
		linepos += 1
		if line == "[Editor]":
			depth = linepos
		elif line == "[Metadata]":
			# print(f"{depth+1} until {linepos-2}")
			searchdepthstart = depth+1
			searchdepthend = linepos
			for i in range(searchdepthstart-1, searchdepthend-1):
				if osufile[i] != "":
					DataEditor.append(osufile[i])
			break
	# Metadata
	depth = 0
	linepos = 0
	DataMetadata = []
	for line in osufile:
		linepos += 1
		if line == "[Metadata]":
			depth = linepos
		elif line == "[Difficulty]":
			# print(f"{depth+1} until {linepos-2}")
			searchdepthstart = depth+1
			searchdepthend = linepos
			for i in range(searchdepthstart-1, searchdepthend-1):
				if osufile[i] != "":
					DataMetadata.append(osufile[i])
			break	# Events

	# Difficulty
	depth = 0
	linepos = 0
	DataDifficulty = []
	for line in osufile:
		linepos += 1
		if line == "[Difficulty]":
			depth = linepos
		elif line == "[Events]":
			# print(f"{depth+1} until {linepos-2}")
			searchdepthstart = depth+1
			searchdepthend = linepos
			for i in range(searchdepthstart-1, searchdepthend-1):
				if osufile[i] != "":
					DataDifficulty.append(osufile[i])
			break	
	# Events
	depth = 0
	linepos = 0
	DataEvents = []
	for line in osufile:
		linepos += 1
		if line == "[Events]":
			depth = linepos
		elif line == "[TimingPoints]":
			# print(f"{depth+1} until {linepos-2}")
			searchdepthstart = depth+1
			searchdepthend = linepos
			for i in range(searchdepthstart-1, searchdepthend-1):
				if osufile[i] != "":
					DataEvents.append(osufile[i])
			break	

	# TimingPoints
	depth = 0
	linepos = 0
	DataTimingPoints = []
	for line in osufile:
		linepos += 1
		if line == "[TimingPoints]":
			depth = linepos
		elif line == "[Colours]" or line == "[HitObjects]":
			# print(f"{depth+1} until {linepos-2}")
			searchdepthstart = depth+1
			searchdepthend = linepos
			for i in range(searchdepthstart-1, searchdepthend-1):
				if osufile[i] != "":
					DataTimingPoints.append(osufile[i])
			break

	# Colours
	depth = 0
	linepos = 0
	DataColours = []
	for line in osufile:
		linepos += 1
		if line == "[Colours]":
			depth = linepos
		elif line == "[HitObjects]":
			# print(f"{depth+1} until {linepos-2}")
			searchdepthstart = depth+1
			searchdepthend = linepos
			for i in range(searchdepthstart-1, searchdepthend-1):
				if osufile[i] != "":
					DataColours.append(osufile[i])
			break

	# HitObjects
	linepos = 0
	DataHitObjects = []
	for line in osufile:
		linepos += 1
		if line == "[HitObjects]":
			searchdepthstart = linepos+1
			searchdepthend = len(osufile)+1
			for i in range(searchdepthstart-1, searchdepthend-1):
				if osufile[i] != "":
					DataHitObjects.append(osufile[i])
			break
	osudata = OsuMap(DataGeneral, DataEditor, DataMetadata, DataDifficulty, DataEvents, DataTimingPoints, DataColours, DataHitObjects) 
	return osudata


def AssembleBeatmapData(mapdata):
	# general
	if type(mapdata) == str:
		mapdata = ParseAllBeatmapData(mapdata.splitlines())
	toprint = ""
	toprint += "osu file format v14\n[General]" + "\n"
	for line in mapdata.general:
		toprint += line + "\n"
	# editor
	toprint += "[Editor]" + "\n"
	for line in mapdata.editor:
		toprint += line + "\n"
	# metadata
	toprint += "[Metadata]" + "\n"
	for line in mapdata.metadata:
		if line.startswith("Version"):
			if "(Exported)" in line:
				toprint += line + "\n"
			else:
				toprint += line + " (Exported)\n"
		else:
			toprint += line + "\n"
	# difficulty
	toprint += "[Difficulty]" + "\n"
	for line in mapdata.difficulty:
		toprint += line + "\n"
	# events
	toprint += "[Events]" + "\n"
	for line in mapdata.events:
		toprint += line + "\n"
	# timingpoints
	toprint += "[TimingPoints]" + "\n"
	for line in mapdata.timingpoints:
		toprint += line + "\n"
	# colors
	toprint += "[Colours]" + "\n"
	for line in mapdata.colors:
		toprint += line + "\n"
	# hitobjects
	toprint += "[HitObjects]" + "\n"
	for line in mapdata.hitobjects:
		toprint += line + "\n"
	return toprint
