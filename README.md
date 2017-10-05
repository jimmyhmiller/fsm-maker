
# FSM Maker

Create SVG drawings of finite state machines with a simple DSL.

```
start
0 -> start
1 -> middle

middle
0 -> finish
1 -> finish
```

![FSM](https://github.com/jimmyhmiller/fsm-maker/raw/master/src/images/example.svg "FSM")


## Development

```bash
lein figwheel
```
