/**
 * Anubis2 · Gridea Pro 主题脚本
 * 移植自 Hugo Anubis2
 */

(function() {
  'use strict';

  // ============================================================
  // 1. 主题切换
  // ============================================================
  var STORAGE_KEY = 'user-color-scheme';
  var defaultTheme = document.documentElement.getAttribute('data-theme') || 'auto';
  
  var currentTheme;
  var switchButton;
  var autoDefinedScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function detectCurrentScheme() {
    if (localStorage !== null && localStorage.getItem(STORAGE_KEY)) {
      return localStorage.getItem(STORAGE_KEY);
    }
    if (defaultTheme && defaultTheme !== 'auto') {
      return defaultTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function switchTheme(e) {
    currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    if (localStorage) localStorage.setItem(STORAGE_KEY, currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    // 同时支持 class 方式
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    changeGiscusTheme(currentTheme);
  }

  function autoChangeScheme(e) {
    currentTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    changeGiscusTheme(currentTheme);
  }

  function changeGiscusTheme(theme) {
    function sendMessage(message) {
      var iframe = document.querySelector('iframe.giscus-frame');
      if (!iframe) return;
      iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }
    sendMessage({
      setConfig: {
        theme: theme
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    switchButton = document.querySelector('.theme-switcher');
    currentTheme = detectCurrentScheme();

    if (currentTheme === 'auto') {
      autoChangeScheme(autoDefinedScheme);
      if (typeof autoDefinedScheme.addEventListener === 'function') {
        autoDefinedScheme.addEventListener('change', autoChangeScheme);
      } else if (typeof autoDefinedScheme.addListener === 'function') {
        autoDefinedScheme.addListener(autoChangeScheme);
      }
    } else {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }

    if (switchButton) {
      switchButton.addEventListener('click', switchTheme, false);
    }
  });

  // ============================================================
  // 2. 代码复制按钮
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    var codeBlocks = document.querySelectorAll('.highlight');
    
    codeBlocks.forEach(function(block) {
      var copyBtn = document.createElement('button');
      copyBtn.className = 'highlight-copy-btn';
      copyBtn.innerHTML = '📋';
      copyBtn.title = '复制代码';
      
      copyBtn.addEventListener('click', function() {
        var code = block.querySelector('code');
        if (!code) return;
        
        var text = code.textContent;
        
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(function() {
            copyBtn.innerHTML = '✓';
            setTimeout(function() {
              copyBtn.innerHTML = '📋';
            }, 2000);
          });
        } else {
          var textarea = document.createElement('textarea');
          textarea.value = text;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          copyBtn.innerHTML = '✓';
          setTimeout(function() {
            copyBtn.innerHTML = '📋';
          }, 2000);
        }
      });
      
      block.appendChild(copyBtn);
    });
  });

  // ============================================================
  // 3. 目录展开/收起
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    var toc = document.querySelector('.toc');
    if (toc) {
      toc.addEventListener('click', function(e) {
        if (e.target.tagName !== 'A') {
          e.preventDefault();
          if (this.open) {
            this.open = false;
            this.classList.remove('expanded');
          } else {
            this.open = true;
            this.classList.add('expanded');
          }
        }
      });
    }
  });

  // ============================================================
  // 4. 外链新窗口打开
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.e-content a');
    var currentHost = window.location.host;
    
    links.forEach(function(link) {
      try {
        var url = new URL(link.href);
        if (url.host !== currentHost) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      } catch (e) {}
    });
  });

})();
