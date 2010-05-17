## A simple group playlist builder

This is an evil fork of [jchris' taskr](http://github.com/jchris/taskr). The whole interface is the same with minor parts hijacked to get the playdar integration working.

## Features 

_From Taskr_

* Realtime group updates across ad-hoc clusters.
* Twitter-style @names and #hashtag browsing.

_New_

* adding tracks to sampler in the style of `artist - title`
* highlighting of resolved tracks
* playing resolved tracks through soundmanager2


[Introductory screencast of taskr here.](http://www.youtube.com/watch?v=qJbfRZz6qNY)

## Running

Right now the easiest way to run this is to clone and deploy the checkout with [CouchApp](http://github.com/couchapp/couchapp).

You need a running instance of [playdar](http://playdar.org)

jchris is working on some code to make [sharing CouchApps a breeze](http://github.com/jchris/garden).

You can get help at the [CouchApp mainling list](http://groups.google.com/group/couchapp).

## Contribute

since this is just a fork of taskr, it'll be updated with the latest features of evently as the development progresses. I'll need to rewrite or enhance the "reply" feature of taskr to give it a kind-of _playlist_ feeling.