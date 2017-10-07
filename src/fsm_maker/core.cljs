(ns fsm-maker.core
    (:require [reagent.core :as r]
              [instaparse.core :as insta]
              [fsmviz.core :as fsmviz]))


(def default-text
"start
0 -> start
1 -> middle

middle
0 -> finish
1 -> finish")


(def initial-hash
  (subs (js/decodeURIComponent (.-hash js/location)) 1))

(defonce fsm-text (r/atom 
                   (if-not (= initial-hash "") 
                     initial-hash
                     default-text)))

(add-watch fsm-text :url-encode
           (fn [_ _ _ new-state]
             (set! (.-hash js/location)
                    (js/encodeURIComponent new-state))))

(def grammar
"<graph>       = node*
node           = start-point connection*
<start-point>  = identifier
connection     = from <arrow> to
<from>         = identifier
<to>           = identifier
arrow          = \"->\"
<identifier>   = #\"[A-Za-z0-9\\-_]+\"")

(def parse (insta/parser grammar :auto-whitespace :standard))

(defn extract-connection [label [_ transition destination]]
  [label transition destination])

(defn node->map [[_ label & connections]]
  (map (partial extract-connection label) connections))

(defn build-fsm [input]
  (->> input
       parse
       (mapcat node->map)))

(defn get-value [e]
  (.. e -target -value))

(defn home-page []
  [:div 
   [:h2 "Create a Finite State Machine"]
   [:textarea {:value @fsm-text 
               :onChange #(reset! fsm-text (get-value %))
               :style {:width "30%"
                       :height "200px"
                       :margin-right "30px"
                       :float :left}}]
   [:div {:dangerouslySetInnerHTML 
          {:__html (fsmviz/generate-image 
                    (build-fsm @fsm-text) "fsm")}
          :style {:width "40%"
                  :height "200px"
                  :float :left}}]])

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
