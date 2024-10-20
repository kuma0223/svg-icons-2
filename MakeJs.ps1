$myDir=(Split-path $MyInvocation.MyCommand.Path -parent)

$js = @'
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

'@

$list = ""
foreach($f in (Get-ChildItem ./svg -Filter "*.svg")){
    $name = $f.Name.Replace(".svg", "")
    $code = "'$name':'"
    $strs = Get-Content $f.FullName
    for($i = 1; $i -lt $strs.Length - 1; $i++){
        $code += $strs[$i].Replace("#000000","currentColor").Trim()
    }
    $code += "',`r`n"
    $list += $code
}

$js += @"
var YuSvgIcons = {
$($list.Trim())
}

window.YuSvgIcons = YuSvgIcons
"@

Set-Content "svg-icons.js" $js
