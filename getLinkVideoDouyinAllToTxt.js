javascript:(() => {
  var video = 0;

  function pageScroll() {
    window.scrollBy(0, 1000);
    let max = document.querySelectorAll("li.Eie04v01").length;
    video += 2;
    if (video > max) {
      const myNodelist = document.querySelectorAll("li.Eie04v01");
      const uid = window.location.href.split("/")[4].split("?")[0];
      const link = [];
      for (let i = 0; i < myNodelist.length; i++) {
        link.push(
          `https:${
            document.querySelectorAll("li.Eie04v01")[i]?.children[0][
              Object.keys(
                document.querySelectorAll("li.Eie04v01")[i]?.children[0]
              )[0]
            ]?.memoizedProps?.children[0]?.props?.children[2]?.props?.awemeInfo
              ?.video?.playApi
          }`
        );
      }
      const file = new Blob([JSON.stringify(link)], { type: "text/plain" });
      const url = window.URL.createObjectURL(file);
      const b = document.createElement("a");
      b.style.display = "none";
      b.href = url;

      b.setAttribute("download", `${uid}-phamthanhnam.com.txt`);
      b.download = `${uid}-phamthanhnam.com.txt`;
      document.body.appendChild(b);
      b.click();
      window.URL.revokeObjectURL(url);
      return true;
    }
    setTimeout(pageScroll, 100);
  }

  pageScroll();
})();







javascript:(()=>{var e=0;!function t(){window.scrollBy(0,1e3);let l=document.querySelectorAll("li.Eie04v01").length;if((e+=2)>l){const e=document.querySelectorAll("li.Eie04v01"),t=window.location.href.split("/")[4].split("?")[0],l=[];for(let t=0;t<e.length;t++)l.push(`https:${document.querySelectorAll("li.Eie04v01")[t]?.children[0][Object.keys(document.querySelectorAll("li.Eie04v01")[t]?.children[0])[0]]?.memoizedProps?.children[0]?.props?.children[2]?.props?.awemeInfo?.video?.playApi}`);const o=new Blob([JSON.stringify(l)],{type:"text/plain"}),n=window.URL.createObjectURL(o),i=document.createElement("a");return i.style.display="none",i.href=n,i.setAttribute("download",`${t}-phamthanhnam.com.txt`),i.download=`${t}-phamthanhnam.com.txt`,document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(n),!0}setTimeout(t,500)}()})();
