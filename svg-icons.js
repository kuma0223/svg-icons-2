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
'ban':'<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="16" cy="16" r="11" stroke-linecap="round"/><path d="m8 24 16-16"/></g>',
'bar-chart':'<g fill="currentColor" stroke="currentColor" stroke-width="2"><path d="m9 28v-12"/><path d="m16 28v-18"/><path d="m23 28v-24"/><path d="m4 27h24"/></g>',
'bars':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m4 8h24"/><path d="m4 16h24"/><path d="m4 24h24"/></g>',
'bell':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m6 24c-3 0 0.515-2.06 1-4 2-8 0.758-14.3 9-15 7.86 0.382 7 7 9 15 0.767 3.07 4 4 1 4z" stroke-linejoin="round"/><path d="m11 24s2 4 5 4 5-4 5-4"/></g>',
'book':'<g fill="none" stroke="currentColor"><path d="m5 6h7c1.49 0 4 3 4 3s2.51-3 4-3h7v18h-7c-1.49 0-4 2-4 2s-2.51-2-4-2h-7z" stroke-width="2"/><path d="m16 9v16" stroke-width="1.5"/></g>',
'bookmark':'<path d="m8 26v-19a2 2 135 0 1 2-2h12a2 2 45 0 1 2 2v19l-8-6z" fill="none" stroke="currentColor" stroke-width="2"/>',
'bulb':'<path d="m12 26c3 2 5 2 8 0" fill="none" stroke="currentColor" stroke-width="2"/><path d="m19 22h-6l-3.01-5.01c-2.32-3.11-1.89-7.46 0.983-10.1 2.87-2.59 7.24-2.58 10.1 0.0381 2.85 2.61 3.25 6.97 0.915 10.1z" fill="none" stroke="currentColor" stroke-width="2"/>',
'calendar':'<path d="m5 7v20h22v-20z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/><g fill="currentColor"><circle cx="16" cy="15.5" r="1.5"/><circle cx="10.5" cy="15.5" r="1.5"/><circle cx="21.5" cy="15.5" r="1.5"/><circle cx="16" cy="21.5" r="1.5"/><circle cx="10.5" cy="21.5" r="1.5"/><path d="m12 5v4" stroke="currentColor" stroke-linecap="square" stroke-width="2"/><path d="m20 5v4" stroke="currentColor" stroke-linecap="square" stroke-width="2"/></g>',
'camera':'<g fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="22" height="22" ry="3"/><circle cx="16" cy="16" r="5"/></g>',
'check':'<path d="m4 17 4-5 7 7 13-16-12 23z" fill="currentColor"/>',
'clock':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="16" cy="16" r="12"/><path d="m16 9v7l5 4"/></g>',
'cloud':'<path d="m8 15c-1-11 15-11 14-1 9 0 8 12 3 12h-18c-5 0-6-11 1-11 3 0 4 2.56 4 4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
'cog':'<path d="m13.1 6.03 1.41-2.95h2.88l1.39 2.82 2.21 1.02 3.09-1.09 2.04 2.04-0.994 2.98 0.815 2.28 2.95 1.41v2.88l-2.89 1.44-0.937 2.23 1.06 3.02-2.04 2.04-3.06-1.02-2.23 0.94-1.39 2.85h-2.88l-1.44-2.89-2.23-0.937-3.02 1.06-2.04-2.04 1.02-2.97-0.936-2.32-2.85-1.39v-2.88l2.82-1.39 0.975-2.29-1.04-3.01 2.04-2.04 3.06 1.02z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/><circle cx="16" cy="16" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/>',
'connect':'<path d="m7 7h15c6 0 6 9 0 9h-12c-6 0-6 9 0 9h15" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="7" cy="7" r="3" fill="currentColor"/><circle cx="25" cy="25" r="3" fill="currentColor"/>',
'control':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m12 4h8v8h8v8h-8v8h-8v-8h-8v-8h8z" stroke-width="2"/><circle cx="16" cy="16" r="3" stroke-width="1.5"/></g>',
'copy':'<g fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"><path d="m6 4h16v20h-16z"/><path d="m9 28h17v-21"/></g>',
'crown':'<path d="m8 27-4-18 7 5 5-9 5 9 7-5-4 18z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>',
'cube':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m5 10v12l11 6 11-6v-12l-11-6z"/><path d="m5 10 11 6 11-6"/><path d="m16 16v12"/></g>',
'delete':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m6 28v-24h20v8" stroke-linecap="square"/><g><path d="m10 28h4"/><path d="m26 16v4"/><path d="m26 25v-2"/><path d="m10 11h12"/><path d="m10 17h4"/><path d="m17 28h2"/></g></g>',
'divide':'<path d="m25 16h-18" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/><circle cx="16" cy="9" r="2" fill="currentColor"/><circle cx="16" cy="23" r="2" fill="currentColor"/>',
'down':'<path d="m16 27-10-12h6v-10h8v10h6z" fill="none" stroke="currentColor" stroke-width="2"/>',
'download':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="m19 13v-9h-6v9h-6l9 10 9-10z"/><path d="m6 28h20" stroke-linejoin="round"/></g>',
'eraser':'<path d="m28 14-11 11c-7 7-17-3-10-10l11-11z" fill="none" stroke="currentColor" stroke-width="1.99"/><path d="m7 15 10 10" fill="none" stroke="currentColor" stroke-width="2"/>',
'filter':'<path d="m6 5v4l7 7v7l6 4v-11l7-7v-4z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>',
'flag':'<path d="m8 28v-23h18l-4 7 4 7h-17" fill="none" stroke="currentColor" stroke-width="2"/>',
'flask':'<path d="m19 13 8 11-2 3h-18l-2-3 8-11v-9h6z" fill="none" stroke="currentColor" stroke-width="2"/>',
'folder-open':'<g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><path d="m5 15v-10h8l2 4h12v17"/><path d="m22 15h-21l4 11h22z"/></g>',
'folder':'<path d="m5 5h8l2 4h12v17h-22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>',
'grid':'<g fill="none" stroke="currentColor"><rect x="5" y="5.53" width="22" height="21" ry="0" stroke-width="2"/><g stroke-width="1.5"><path d="m5 12.5h22"/><path d="m5 19.5h22"/><path d="m16 5.53v21"/></g></g>',
'headphone':'<path d="m6 18h3a2 2 45 0 1 2 2v4.04a1.61 1.61 141 0 1-1.92 1.58l-3.08-0.615-1-7c0-7 3-13 11-13s11 6 11 13l-1 7-3.04 0.608a1.64 1.64 39.3 0 1-1.96-1.61v-4a2 2 135 0 1 2-2h3" fill="none" stroke="currentColor" stroke-width="2"/>',
'heart':'<path d="m23 20.8c10.5-9.02 0.497-22.4-7-12-7.5-10.5-17.4 3.1-7 12l7 6z" fill="none" stroke="currentColor" stroke-width="2"/>',
'history':'<path d="m6.91 8.17a12 12 0 0 1 13.1-3.49 12 12 0 0 1 8.03 10.9 12 12 0 0 1-7.19 11.4 12 12 0 0 1-13.3-2.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m16 9v7l5 4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m4 4v8h8z" fill="currentColor"/>',
'home':'<path d="m5 27v-15l11-8 11 8v15h-15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
'hourglass':'<path d="m8 8v-3h16v3c0 8-16 8-16 16v3h16v-3c0-8-16-8-16-16z" fill="none" stroke="currentColor" stroke-width="2"/>',
'indent':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m4 7h24"/><path d="m4 14h24"/><path d="m18 23h10"/><path d="m6.5 19 6 4-6 4"/></g>',
'inversion':'<circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2"/><path d="m16 27a11 11 0 0 1-11-11 11 11 0 0 1 11-11l0.00589 11z" fill="currentColor"/>',
'key':'<path d="m27 5h-13v9l-9 9v4h4l9-9h9z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="20.5" cy="11.5" r="1.5" fill="currentColor"/>',
'ku-down':'<path d="m6.98 11 9 10 9-10" fill="none" stroke="currentColor" stroke-width="2.5"/>',
'ku-first':'<path d="m21 7-10 9 10 9" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="m8 5v22" fill="none" stroke="currentColor" stroke-width="2.5"/>',
'ku-last':'<path d="m11 7 10 9-10 9" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="m24 5v22" fill="none" stroke="currentColor" stroke-width="2.5"/>',
'ku-left':'<path d="m21 7-10 9 10 9" fill="none" stroke="currentColor" stroke-width="2.5"/>',
'ku-right':'<path d="m11 7 10 9-10 9" fill="none" stroke="currentColor" stroke-width="2.5"/>',
'ku-up':'<path d="m25 21-9-10-9 10" fill="none" stroke="currentColor" stroke-width="2.5"/>',
'kuku-down':'<path d="m7 14 9 10 9-10" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="m7 7 9 10 9-10" fill="none" stroke="currentColor" stroke-width="2.5"/>',
'kuku-left':'<path d="m25 25-10-9 10-9" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="m18 25-10-9 10-9" fill="none" stroke="currentColor" stroke-width="2.5"/>',
'kuku-right':'<path d="m15 25 10-9-10-9" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="m8 25 10-9-10-9" fill="none" stroke="currentColor" stroke-width="2.5"/>',
'kuku-up':'<path d="m7 18 9-10 9 10" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="m7 25 9-10 9 10" fill="none" stroke="currentColor" stroke-width="2.5"/>',
'laptop':'<g fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="7" width="20" height="13" rx="2" ry="2"/><path d="m4 25h24"/></g>',
'left-down':'<path d="m22 25h-15v-15" fill="none" stroke="currentColor" stroke-width="2"/><path d="m24 8-16 16" fill="currentColor" stroke="currentColor" stroke-width="2"/>',
'left-up':'<path d="m22 7h-15v15" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 24,24 8,8" fill="currentColor" stroke="currentColor" stroke-width="2"/>',
'left':'<path d="m5 16 12 10v-6h10v-8h-10v-6z" fill="none" stroke="currentColor" stroke-width="2"/>',
'line-chart':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="m5 5v22h22" stroke-linejoin="round"/><path d="m11 21 12-12"/></g>',
'link':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m10.8 13.4-4.24 4.24c-4.95 4.95 2.83 12.7 7.78 7.78l4.24-4.24"/><path d="m13.6 10.7 4.07-4.07c4.95-4.95 12.7 2.83 7.78 7.78l-4.07 4.07"/><path d="m12 20 8-8"/></g>',
'list':'<g fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="7" width="22" height="6"/><rect x="5" y="19" width="22" height="6"/></g>',
'lock':'<g fill="none" stroke="currentColor" stroke-width="2"><path x="8" y="13" width="16" height="14" d="m8 13h16v11a3 3 135 0 1-3 3h-10a3 3 45 0 1-3-3z"/><path d="m11 13v-4c0-6 10-6 10 0v4"/></g>',
'mail':'<g fill="none" stroke="currentColor"><rect x="5" y="7" width="22" height="18" ry="2" stroke-width="2"/><path d="m5 12 11 7 11-7" stroke-linejoin="round" stroke-width="1.5"/></g>',
'marker':'<g fill="none" stroke="currentColor" stroke-linejoin="round"><path d="m22 22-6 6-6-6c-6-6-5-18 6-18 11 0 12 12 6 18z" stroke-width="2"/><circle cx="16" cy="13.5" r="4" stroke-width="1.5"/></g>',
'maximize':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m20 5h7v7"/><path d="m5 20v7h7"/><path d="m12 5h-7v7"/><path d="m27 20v7h-7"/></g>',
'memo':'<g fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"><path d="m6 4h20v24h-20z"/><path d="m11 11h10" stroke-linejoin="round"/><path d="m11 17h5" stroke-linejoin="round"/></g>',
'mic':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m11 9c0-6 10-6 10 0v7c0 6-10 6-10 0z"/><path d="m6 18c2 5 6 7 10 7s8-2 10-7" stroke-linecap="round"/><path d="m16 25v5"/></g>',
'minus':'<path d="m6 16h20" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>',
'monitor':'<g fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="22" height="16" ry="2"/><path d="m16 21v6"/><path d="m8 27h16"/></g>',
'moon':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="m26.8 21a11 11 0 0 1-13.5 5.31 11 11 0 0 1-6.99-12.7 11 11 0 0 1 11.7-8.55"/><path d="m26.3 20.9a11 11 0 0 1-8.04-5.71 11 11 0 0 1-0.236-9.86"/></g>',
'multiply':'<g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><path d="m24 8-16 16"/><path d="m8 8 16 16"/></g>',
'network':'<g fill="none" stroke="currentColor" stroke-linejoin="round"><circle cx="16" cy="16" r="12" stroke-width="2"/><g stroke-width="1.5"><ellipse cx="16" cy="16" rx="5" ry="12"/><path d="m5 12h22"/><path d="m5 20h22"/></g></g>',
'outdent':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m4 7h24"/><path d="m4 14h24"/><path d="m18 23h10"/><path d="m13.7 19-6 4 6 4"/></g>',
'panels':'<g fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="8" height="8"/><rect x="19" y="5" width="8" height="8"/><rect x="5" y="19" width="8" height="8"/><rect x="19" y="19" width="8" height="8"/></g>',
'pen':'<path d="m27 11-16 16h-6v-6l16-16z" fill="none" stroke="currentColor" stroke-width="1.99"/><path d="m17 9 6 6" fill="none" stroke="currentColor" stroke-width="2"/>',
'phone':'<rect x="8" y="4" width="16" height="24" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="18" y="7" width="3" height="3" fill="currentColor"/>',
'photo':'<g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><rect x="5" y="6" width="22" height="20"/><path d="m11 26 10-14 6 8"/><path d="m5 21 6-5 4.47 3.53"/></g>',
'pie-chart':'<circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2"/><path d="m16 5v11h11" fill="none" stroke="currentColor" stroke-width="2"/>',
'pin-down':'<path d="m16 19h8l-4-14h-8l-4 14h8v9" fill="none" stroke="currentColor" stroke-width="2"/>',
'pin-up':'<path d="m13 16v8l14-4v-8l-14-4v8h-9" fill="none" stroke="currentColor" stroke-width="2"/>',
'plus':'<g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><path d="m16 5v22"/><path d="m5 16h22"/></g>',
'power':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m22.3 6.97a11 11 0 0 1 4.22 12.3 11 11 0 0 1-10.5 7.73 11 11 0 0 1-10.5-7.66 11 11 0 0 1 4.14-12.3"/><path d="m16 4v11"/></g>',
'raindrop':'<path d="m16 5s-9.77 11-8 17c0.888 3.02 4.86 5 8 5s7.11-1.98 8-5c1.77-6.01-8-17-8-17z" fill="none" stroke="currentColor" stroke-width="2"/>',
'redo':'<path d="m16 22h-4c-9 0-9-12 0-12h8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path d="m19 4.8v10.4l9-5.2z" fill="currentColor"/>',
'refresh':'<path d="m25.1 22.2a11 11 0 0 1-12.9 4.14 11 11 0 0 1-7.12-11.5 11 11 0 0 1 9.48-9.69 11 11 0 0 1 11.7 6.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"/><path d="m19 14h10v-10z" fill="currentColor"/>',
'right-down':'<path d="m25 10v15h-15" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 24,24 8,8" fill="currentColor" stroke="currentColor" stroke-width="2"/>',
'right-up':'<path d="m25 22v-15h-15" fill="none" stroke="currentColor" stroke-width="2"/><path d="m24 8-16 16" fill="currentColor" stroke="currentColor" stroke-width="2"/>',
'right':'<path d="m27 16-12 10v-6h-10v-8h10v-6z" fill="none" stroke="currentColor" stroke-width="2"/>',
'search':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="14" r="8" stroke-width="2"/><path d="m20 20 7 7" stroke-width="3"/></g>',
'share':'<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="23" cy="9" r="4"/><circle cx="9" cy="16" r="4"/><circle cx="23" cy="23" r="4"/><path d="m19.5 10.8-6.94 3.31m-0.0625 3.69 6.94 3.56"/></g>',
'sign-in':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m19 5h8v22h-8" stroke-linecap="round"/><path d="m5 13h4v-6l12 9-12 9v-6h-4z" stroke-linecap="square" stroke-linejoin="round"/></g>',
'sign-out':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m19 5h8v22h-8" stroke-linecap="round"/><path d="m20 19-5 5.9e-5v6l-11-9 11-9v6l5-2.9e-5z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/></g>',
'snowman':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m19.2 14.1c2.82 1.17 4.79 3.83 4.79 6.92 0 4.17-3.58 7.55-8 7.55s-8-3.38-8-7.55c2e-7 -3.08 1.96-5.74 4.77-6.91"/><circle cx="16" cy="9.5" r="5.5"/><path d="m9 18-4-3"/><path d="m23 18 4-3"/></g>',
'sort-down':'<g fill="none" stroke="currentColor" stroke-width="2.5"><path d="m23 13.5-7-8-7 8" opacity="0.25"/><path d="m23 18.5-7 8-7-8"/></g>',
'sort-up':'<g fill="none" stroke="currentColor" stroke-width="2.5"><path d="m23 13.5-7-8-7 8"/><path d="m23 18.5-7 8-7-8" opacity="0.25"/></g>',
'sort':'<g fill="none" stroke="currentColor" stroke-width="2.5"><path d="m23 13.5-7-8-7 8"/><path d="m23 18.5-7 8-7-8"/></g>',
'star':'<path d="m16 3.49 4.2 7.22 8.16 1.77-5.56 6.23 0.841 8.31-7.64-3.37-7.64 3.37 0.841-8.31-5.56-6.23 8.16-1.77z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>',
'storage':'<g fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="16" cy="9" rx="11" ry="4"/><path d="m27 9v14c0 2.21-4.92 4-11 4-6.08 0-11-1.79-11-4v-14"/></g>',
'sun':'<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="16" cy="16" r="6" /><path d="m16 2v4"/><path d="m28.1 9-3.46 2"/><path d="m28.1 23-3.46-2"/><path d="m16 30v-4"/><path d="m3.88 23 3.46-2"/><path d="m3.88 9 3.46 2"/></g>',
'swap':'<path d="m7 22h17" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/><path d="m25 10h-17" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/><path d="m11 4-7 6 7 6z" fill="currentColor"/><path d="m21 16 7 6-7 6z" fill="currentColor"/>',
'tag':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m10 9-6 7 6 7"/><path d="m22 9 6 7-6 7"/><path d="m18 7-4 18"/></g>',
'talk':'<path d="m7 5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5l4 5 4-5h5a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" stroke-width="2"/>',
'target':'<circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><circle cx="16" cy="16" r="3" fill="currentColor"/><g fill="none" stroke="currentColor" stroke-width="2"><path d="m16 2v4"/><path d="m2 16h4"/><path d="m26 16h4"/><path d="m16 26v4"/></g>',
'tel':'<path d="m7.07 5.9c-0.828 9.07 4.03 17.8 13 22.5l5.93-5.73-4.37-5.56-4.33 2.5-4-6.93 4.33-2.5-2.63-6.56z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>',
'thunder':'<path d="m10 5h15l-8 7 5 6-12 8 3-8-8-5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>',
'trash':'<g fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"><path d="m7 12 2 15h14l2-15"/><path d="m5 7h22"/><path d="m16 7v-3"/></g>',
'twinkle':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m14 6c-2 4-4 6-8 8 4 2 6 4 8 8 2-4 4-6 8-8-4-2-6-4-8-8z"/><path d="m24 19v10" opacity=".6"/><path d="m19 24h10" opacity=".6"/></g>',
'undo':'<path d="m16 22h4c9 0 9-12 0-12h-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path d="m13 4.8-9 5.2 9 5.2z" fill="currentColor"/>',
'unlock':'<g fill="none" stroke="currentColor" stroke-width="2"><path x="8" y="13" width="16" height="14" d="m8 13h16v11a3 3 135 0 1-3 3h-10a3 3 45 0 1-3-3z"/><path d="m11 13v-4c0-6-8-6-8 0v4"/></g>',
'up':'<path d="m16 5-10 12h6v10h8v-10h6z" fill="none" stroke="currentColor" stroke-width="2"/>',
'upload':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="m19 14v9h-6v-9h-6l9-10 9 10z"/><path d="m6 28h20" stroke-linejoin="round"/></g>',
'user':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="16" cy="9.56" rx="5.56" ry="5.56" stroke-width="1.88"/><path d="m5 27c3-11 19-11 22 0z" stroke-width="2"/></g>',
'video':'<path d="m7 8h19c2 0 3 1 3 3v9c0 2-1 4-3 4h-14z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"/><path d="m4.06 9 3.75 12-2.1 0.011-3.73-12" fill="currentColor"/>',
'volume-0':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12v8h4l6 5v-18l-6 5z"/><path d="m20 13 6 6" stroke-linecap="round"/><path d="m26 13-6 6" stroke-linecap="round"/></g>',
'volume-1':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12v8h4l6 5v-18l-6 5z"/><path d="m19.9 11.9a5 5 0 0 1 2.11 4.04 5 5 0 0 1-2.05 4.07" stroke-linecap="round"/></g>',
'volume-2':'<g fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12v8h4l6 5v-18l-6 5z"/><path d="m19.9 11.9a5 5 0 0 1 2.11 4.04 5 5 0 0 1-2.05 4.07" stroke-linecap="round"/><path d="m19.9 6.43a10 10 0 0 1 7.11 9.53 10 10 0 0 1-7.03 9.59" stroke-linecap="round"/></g>',
'warning':'<path d="m13.8 5.9-9.86 17.6a2.34 2.34 59.6 0 0 2.05 3.49h20a2.34 2.34 120 0 0 2.05-3.49l-9.86-17.6a2.5 2.5 180 0 0-4.37 0z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/><rect x="15" y="11" width="2" height="7" fill="currentColor"/><rect x="15" y="21" width="2" height="2" fill="currentColor"/>',
'wave':'<path d="m4 28s4-7 8-7 6 2 9 3c3.79 1.26 7-4 7-4s-4 7-8 7-6-2-9-3c-3.79-1.26-7 4-7 4z" fill="currentColor"/><path d="m4 25s2.46-11.1 5.46-15.7c1.07-1.67 2.56-3.17 4.31-4.12 1.52-0.826 3.19-1.2 5.04-1.2 5 0 8.2 4.04 8.2 7.04 0 1.7-0.785 3.68-2 5-1.01 1.1-2.53 1.78-4 2-2.01 0.301-4.85 0.673-6-1-0.475-0.694 0.0177-1.79 0.514-2.47 1.01-1.39 4.49-2.53 4.49-2.53s-2.3 1.84-2 3c0.284 1.09 1.88 1.57 3 1.53 1.34-0.0416 2.97-0.799 3.46-2.04 0.634-1.61-0.315-3.68-1.46-4.97-1.41-1.6-3.74-2.57-5.88-2.55-2.15 0.0286-4.32 1.21-5.84 2.72-4.01 3.98-7.28 15.3-7.28 15.3z" fill="currentColor"/>',
'wifi-1':'<circle cx="16" cy="24" r="1" fill="currentColor"/><path d="m11.9 20.5a6.08 5.96 0 0 1 8.07-0.00583" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>',
'wifi-2':'<circle cx="16" cy="24" r="1" fill="currentColor"/><path d="m8.66 16.8a11 11 0 0 1 14.7 0.0486" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path d="m11.9 20.5a6.08 5.96 0 0 1 8.07-0.00583" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>',
'wifi-3':'<circle cx="16" cy="24" r="1" fill="currentColor"/><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="m8.66 16.8a11 11 0 0 1 14.7 0.0486"/><path d="m5.32 13.1a16 16 0 0 1 21.3-0.0625"/><path d="m11.9 20.5a6.08 5.96 0 0 1 8.07-0.00583"/></g>',
'wrench':'<path d="m25.7 10.5 2.14 7.09-7.78 7.78-7.09-2.14-4.95 4.95-4.24-4.24 4.95-4.95-2.14-7.09 7.78-7.78 7.09 2.14-7.07 7.07 4.24 4.24z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>',
'zoom-in':'<g fill="none" stroke="currentColor" stroke-linejoin="round"><g stroke-linecap="round"><circle cx="16" cy="16" r="10" stroke-width="2"/><path d="m24 24 3 3" stroke-width="3"/></g><path d="m16 11v10" stroke-width="2"/><path d="m11 16h10" stroke-width="2"/></g>',
'zoom-out':'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="10" stroke-width="2"/><path d="m24 24 3 3" stroke-width="3"/></g><path d="m11 16h10" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>',
}

window.YuSvgIcons = YuSvgIcons
