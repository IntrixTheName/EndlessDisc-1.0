# Endless Disc - Music Library Manager

A full-stack tool using MongoDB & NodeJS for managing a music library and tailoring the library to individual user's needs

## Project Vision

This project is intended to alleviate a problem present in the current method used to handle a music library. Currently, the library is partially synced between at least 7 different locations (my laptop, desktop, live USB drive, phone, car, OneDrive, and a friend's laptop, though that list of devices could very well be larger). Between them, there are currently 4 different media players that behave differently to the files present. For example, there is a very specific way I want the tags on my laptop/desktop that is incompatible with iTunes, the car's system at best doesn't recognize embedded artwork or lyrics and wasting storage space (and experiences "undocumented behavior" at worst), the USB drive is almost always out-of-sync with the others and is also exceding capacity, and the quirks go on. The goal of this project is to have a unified database with all of a track's information which can be tailored to each person's limitations and devices as needed.

## Project Overview

On the back end, MongoDB is used to track all the information associated with a track. This can be standard tags like "artist" and "album", but also includes custom tags like "listener" and "album group" that may not exist in the defined standard. This then connects to a webpage built with React/NodeJS where users can interact with the system. The webpage provides pages for importing and exporting tracks, managing the library, and a notice board for users to see updates or upcoming service outages.

## Resources

The wiki page contains additional documentation about this project, both for users and as a showcase for my portfolio. The wiki page contains the polished and summarized documentation while additional resources can be located in the **documentation** folder.
