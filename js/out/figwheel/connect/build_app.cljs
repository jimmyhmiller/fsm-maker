(ns figwheel.connect.build-app (:require [fsm-maker.core] [figwheel.client] [figwheel.client.utils] [fsm-maker.dev]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/fsm-maker.core.mount-root (apply js/fsm-maker.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'fsm-maker.core/mount-root' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

