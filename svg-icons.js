window.addEventListener("DOMContentLoaded", function() {
    //initialize
    document.querySelectorAll("svg").forEach(tar=>{
        setInnerSvg(tar)
    })
    //set listener
    const obs = new MutationObserver(records =>{
        records.forEach(rec => {
            if(rec.type == "childList"){
                rec.addedNodes.forEach(added => {
                    if(added.nodeType != 1) return
                    if(added.tagName.toUpperCase() == "SVG"){
                        setInnerSvg(added)
                    } else {
                        added.querySelectorAll("svg").forEach(svg => {
                            setInnerSvg(svg)
                        })
                    }
                })
            } else if(rec.type == "attributes"){
                setInnerSvg(rec.target)
            }
        })
    })
    
    obs.observe(document.body, {
        attributes: true,
        childList: true,
        subtree:true,
        attributeFilter:["yu-icon","size","color"],
    })
    
    function setInnerSvg(target){
        const key = target.getAttribute("yu-icon")
        if(!key) return
        let val = (key in YuSvgIcons) ? YuSvgIcons[key] : ""
        target.setAttribute('viewBox','0 0 32 32')
        const size = target.getAttribute('size')
        const color = target.getAttribute('color')
        if(size){
            target.setAttribute('width',size)
            target.setAttribute('height',size)
            target.style['width']=size+'px'
            target.style['height']=size+'px'
        }
        if(color){
            target.style['color']=color
        }
        target.innerHTML = val
    }
})
var YuSvgIcons = {
'calendar':'<path d="m5 7v20h22v-20z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/><g fill="currentColor"><circle cx="16" cy="15.5" r="1.5"/><circle cx="10.5" cy="15.5" r="1.5"/><circle cx="21.5" cy="15.5" r="1.5"/><circle cx="16" cy="21.5" r="1.5"/><circle cx="10.5" cy="21.5" r="1.5"/><path d="m12 5v4" stroke="currentColor" stroke-linecap="square" stroke-width="2"/><path d="m20 5v4" stroke="currentColor" stroke-linecap="square" stroke-width="2"/></g>',
'clock':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="16" cy="16" r="12"/><path d="m16 9v7l5 4"/></g>',
'cog':'<path d="m13.1 6.03 1.41-2.95h2.88l1.39 2.82 2.21 1.02 3.09-1.09 2.04 2.04-0.994 2.98 0.815 2.28 2.95 1.41v2.88l-2.89 1.44-0.937 2.23 1.06 3.02-2.04 2.04-3.06-1.02-2.23 0.94-1.39 2.85h-2.88l-1.44-2.89-2.23-0.937-3.02 1.06-2.04-2.04 1.02-2.97-0.936-2.32-2.85-1.39v-2.88l2.82-1.39 0.975-2.29-1.04-3.01 2.04-2.04 3.06 1.02z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/><circle cx="16" cy="16" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/>',
'control':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m12 4h8v8h8v8h-8v8h-8v-8h-8v-8h8z" stroke-width="2"/><circle cx="16" cy="16" r="3" stroke-width="1.5"/></g>',
'copy':'<g fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"><path d="m6 4h16v21h-16z"/><path d="m9 28h17v-21"/></g>',
'delete':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m6 28v-24h20v8" stroke-linecap="square"/><g><path d="m10 28h4"/><path d="m26 16v4"/><path d="m26 25v-2"/><path d="m10 11h12"/><path d="m10 17h4"/><path d="m17 28h2"/></g></g>',
'divide':'<path d="m24 16h-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/><circle cx="16" cy="9" r="2" fill="currentColor"/><circle cx="16" cy="23" r="2" fill="currentColor"/>',
'download':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="m19 13v-9h-6v9h-6l9 10 9-10z"/><path d="m6 28h20" stroke-linejoin="round"/></g>',
'graph':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="m5 5v22h22" stroke-linejoin="round"/><path d="m11 21 12-12"/></g>',
'grid':'<g fill="none" stroke="currentColor"><rect x="5" y="5.53" width="22" height="21" ry="0" stroke-width="2"/><g stroke-width="1.5"><path d="m5 12.5h22"/><path d="m5 19.5h22"/><path d="m16 5.53v21"/></g></g>',
'history':'<path d="m6.91 8.17a12 12 0 0 1 13.1-3.49 12 12 0 0 1 8.03 10.9 12 12 0 0 1-7.19 11.4 12 12 0 0 1-13.3-2.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m16 9v7l5 4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m4 4v8h8z" fill="currentColor"/>',
'home':'<path d="m5 27v-15l11-8 11 8v15h-15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
'ku-down':'<path d="m6 11 10 10 10-10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>',
'ku-left':'<path d="m21 6-10 10 10 10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>',
'ku-right':'<path d="m11 6 10 10-10 10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>',
'ku-up':'<path d="m26 21-10-10-10 10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>',
'kuku-left':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="m17 6-10 10 10 10"/><path d="m25 6-10 10 10 10"/></g>',
'kuku-right':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="m15 6 10 10-10 10"/><path d="m7 6 10 10-10 10"/></g>',
'left-down':'<path d="m6.75 12.2v13h13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/><path d="M 7.75,24.25 25,7" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>',
'left-up':'<path d="m6.75 20v-13h13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/><path d="m7.75 8 17.2 17.2" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>',
'memo':'<g fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"><path d="m6 4h20v24h-20z"/><path d="m11 11h10" stroke-linejoin="round"/><path d="m11 17h5" stroke-linejoin="round"/></g>',
'minus':'<path d="m7 16h18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>',
'multiply':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="m23 9-14 14"/><path d="m9 9 14 14"/></g>',
'pen':'<path d="m25.4 8.25-10.6 15.7-7.86 4.45 1.27-8.92 10.6-15.7z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.99"/>',
'plus':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="m16 6v20"/><path d="m6 16h20"/></g>',
'refresh':'<path d="m25.1 22.2a11 11 0 0 1-12.9 4.14 11 11 0 0 1-7.12-11.5 11 11 0 0 1 9.48-9.69 11 11 0 0 1 11.7 6.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"/><path d="m19 14h10v-10z" fill="currentColor"/>',
'right-down':'<path d="m25 12.2v13h-13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/><path d="M 24,24.25 6.75,7" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>',
'right-up':'<path d="m25 20v-13h-13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/><path d="m24 8-17.2 17.2" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>',
'search':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="14" r="8" stroke-width="2"/><path d="m20 20 7 7" stroke-width="3"/></g>',
'sign-in':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m19 5h8v22h-8" stroke-linecap="round"/><path d="m5 13h4v-6l12 9-12 9v-6h-4z" stroke-linecap="square" stroke-linejoin="round"/></g>',
'sign-out':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m19 5h8v22h-8" stroke-linecap="round"/><path d="m20 19-5 5.9e-5v6l-11-9 11-9v6l5-2.9e-5z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/></g>',
'swap':'<path d="m7 22h17" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/><path d="m25 10h-17" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/><path d="m11 4-7 6 7 6z" fill="currentColor"/><path d="m21 16 7 6-7 6z" fill="currentColor"/>',
'trash':'<g fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"><path d="m7 12 2 15h14l2-15"/><path d="m5 7h22"/><path d="m16 7v-3"/></g>',
'upload':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="m19 14v9h-6v-9h-6l9-10 9 10z"/><path d="m6 28h20" stroke-linejoin="round"/></g>',
'user':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="16" cy="9.56" rx="5.56" ry="5.56" stroke-width="1.88"/><path d="m5 27c3-11 19-11 22 0z" stroke-width="2"/></g>',
'video':'<path d="m7 8h19c2 0 3 1 3 3v9c0 2-1 4-3 4h-14z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"/><path d="m4.06 9 3.75 12-2.1 0.011-3.73-12" fill="currentColor"/>',
}

window.YuSvgIcons = YuSvgIcons
