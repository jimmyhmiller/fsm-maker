
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

![FSM](https://raw.githubusercontent.com/jimmyhmiller/fsm-maker/master/images/example.svg "fsm")


## Development

```bash
lein figwheel
```
