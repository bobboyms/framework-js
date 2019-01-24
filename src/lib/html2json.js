const TextElem = e => ({
    toJSON: () => ({
      type:
        'TextElem',
      textContent:
        e.textContent
    })
  })
  
  const Elem = e => ({
    toJSON : () => ({
      type:
        'Elem',
      tagName: 
        e.tagName,
      attributes:
        Array.from(e.attributes, ({name, value}) => [name, value]),
      children:
        Array.from(e.childNodes, fromNode)
    })
  })
  
  // fromNode :: Node -> Elem
  const fromNode = e => {
    switch (e.nodeType) {
      case 3:  return TextElem(e)
      default: return Elem(e)
    }
  }
  
  // html2json :: Node -> JSONString
  const html2json = (e) => {
    let str = JSON.stringify(Elem(e), null, '  ')

    console.log(str)

    return JSON.parse(str)
  }

  export default html2json;