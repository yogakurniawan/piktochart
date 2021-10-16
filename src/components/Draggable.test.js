const Draggable = require("./Draggable")

// @ponicode
describe("componentDidUpdate", () => {
    let inst

    beforeEach(() => {
        inst = new Draggable.default("Michael")
    })

    test("0", () => {
        let param1 = [["Michael", "George", "Michael"], ["Anas", "Michael", "George"], ["Michael", "Edmond", "George"]]
        let callFunction = () => {
            inst.componentDidUpdate(param1, { dragging: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["Jean-Philippe", "Edmond", "Anas"], ["Jean-Philippe", "Michael", "Jean-Philippe"], ["Anas", "Pierre Edouard", "Jean-Philippe"]]
        let callFunction = () => {
            inst.componentDidUpdate(param1, { dragging: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Edmond", "Anas", "George"], ["Anas", "George", "Michael"], ["Pierre Edouard", "Jean-Philippe", "Jean-Philippe"]]
        let callFunction = () => {
            inst.componentDidUpdate(param1, { dragging: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Anas", "Pierre Edouard", "Michael"], ["Michael", "Michael", "Anas"], ["Jean-Philippe", "Anas", "Jean-Philippe"]]
        let callFunction = () => {
            inst.componentDidUpdate(param1, { dragging: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Anas", "Edmond", "Pierre Edouard"], ["Michael", "George", "Anas"], ["Pierre Edouard", "Edmond", "Anas"]]
        let callFunction = () => {
            inst.componentDidUpdate(param1, { dragging: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.componentDidUpdate(undefined, { dragging: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onMouseDown", () => {
    let inst

    beforeEach(() => {
        inst = new Draggable.default("Jean-Philippe")
    })

    test("0", () => {
        let callFunction = () => {
            inst.onMouseDown({ button: -1, pageX: 1, left: 50, pageY: 35, top: 40, stopPropagation: () => "2021-07-29T20:12:53.196Z", preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onMouseDown({ button: 1, pageX: 10, left: 550, pageY: 0.0, top: 390, stopPropagation: () => "2021-07-29T17:54:41.653Z", preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onMouseDown({ button: -1, pageX: 0.0, left: 400, pageY: 1, top: 432, stopPropagation: () => "2021-07-30T00:05:36.818Z", preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onMouseDown({ button: 1, pageX: 1, left: 100, pageY: -1, top: 80.0, stopPropagation: () => "2021-07-30T00:05:36.818Z", preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onMouseDown({ button: 1, pageX: 10, left: 50, pageY: 5, top: 2, stopPropagation: () => "2021-07-29T15:31:46.922Z", preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onMouseDown({ button: -Infinity, pageX: -Infinity, left: -Infinity, pageY: -Infinity, top: -Infinity, stopPropagation: () => "", preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleClick", () => {
    let inst

    beforeEach(() => {
        inst = new Draggable.default("Edmond")
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onMouseUp", () => {
    let inst

    beforeEach(() => {
        inst = new Draggable.default("George")
    })

    test("0", () => {
        let callFunction = () => {
            inst.onMouseUp({ stopPropagation: () => "2021-07-29T17:54:41.653Z", preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onMouseUp({ stopPropagation: () => "2021-07-29T23:03:48.812Z", preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onMouseUp({ stopPropagation: () => "2021-07-30T00:05:36.818Z", preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onMouseUp({ stopPropagation: () => "2021-07-29T20:12:53.196Z", preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onMouseUp({ stopPropagation: () => "2021-07-29T20:12:53.196Z", preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onMouseUp(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onMouseMove", () => {
    let inst

    beforeEach(() => {
        inst = new Draggable.default("Michael")
    })

    test("0", () => {
        let callFunction = () => {
            inst.onMouseMove({ pageX: 0, x: 30, pageY: 0.0, y: 50, stopPropagation: () => "2021-07-30T00:05:36.818Z", preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onMouseMove({ pageX: 0.0, x: 4, pageY: 18, y: 520, stopPropagation: () => "2021-07-30T00:05:36.818Z", preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onMouseMove({ pageX: -1.0, x: 70, pageY: 75, y: 350, stopPropagation: () => "2021-07-29T17:54:41.653Z", preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onMouseMove({ pageX: -10, x: 90, pageY: 10, y: 50, stopPropagation: () => "2021-07-29T15:31:46.922Z", preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onMouseMove({ pageX: -1, x: 4, pageY: 75, y: 1, stopPropagation: () => "2021-07-30T00:05:36.818Z", preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onMouseMove({ pageX: NaN, x: NaN, pageY: NaN, y: NaN, stopPropagation: () => "", preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })
})
