;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M755.608533 932.927795 268.394537 932.927795c-28.85637 0-52.204058-20.154016-52.204058-44.995797L216.190479 107.928105c0-24.840758 23.347688-44.995797 52.204058-44.995797l487.213997 0c28.852277 0 52.200988 20.154016 52.200988 44.995797l0 780.003893C807.808498 912.773779 784.46081 932.927795 755.608533 932.927795zM511.999488 887.931998c19.203128 0 34.803046-13.4575 34.803046-30.008454 0-16.549931-15.599919-30.007431-34.803046-30.007431-19.200058 0-34.798953 13.4575-34.798953 30.007431C477.199512 874.474498 492.799431 887.931998 511.999488 887.931998zM755.608533 152.923902l-17.401012 0L285.791455 152.923902l-17.397942 0 0 629.996414 17.397942 0 452.415044 0 17.401012 0L755.60751 152.923902z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tick" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696C170.208 511.872 149.952 512 137.536 524.608c-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224 0.096 0.096 0.128 0.224 0.224 0.32 2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224l449.184-478.208C901.44 330.592 900.768 310.336 887.904 298.208z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sanjiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M773.128299 807.347658" fill="#ff7700" ></path>' +
    '' +
    '<path d="M889.696178 320.804447 158.862147 320.804447 524.357446 686.352957 889.696178 320.804447Z" fill="#ff7700" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)