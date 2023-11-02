import { useEffect, useState } from "react";;

const loadScript = (url, target) => new Promise(resolve => {
  const tag = document.createElement('script');
  tag.async = false;
  tag.src = url;
  target.appendChild(tag);
  tag.addEventListener('load', resolve, {
    once: true
  });
});

const useScripts = (urls, cb = () => {}, deps) => {
  console.log(urls,cb,deps)
  useEffect(() => {
    const body = document.body;
  
    Promise.all(urls.map(url => loadScript(url, body)))
      .then(cb);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useScripts;