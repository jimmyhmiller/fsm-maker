(ns ^:figwheel-no-load fsm-maker.dev
  (:require
    [fsm-maker.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
