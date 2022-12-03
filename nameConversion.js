function handleSubmit() {

    (function camelCase() {
        let txt = document.getElementById("text").value;
        let ans = txt.toLowerCase();
        let res = ans.split(" ").reduce((s,c)=> s + (c.charAt(0).toUpperCase()+ c.slice(1) ));
        let pcc = document.getElementById('camel-case')
        pcc.innerText = res;
    })();

    (function pascalCase() {
      let txt = document.getElementById("text").value;
      let ans = txt.toLowerCase();
      let res = ans.replace(new RegExp(/[-_]+/, "g"), " ").replace(new RegExp(/[^\w\s]/, "g"), "").trim().split(" ").map((word) => word[0].toUpperCase().concat(word.slice(1))).join("");
      let psc = document.getElementById('pascal-case');
      psc.innerText = res;
    })();

    (function snakeCase() {
        let txt = document.getElementById("text").value;
        let res = txt.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((s) => s.toLowerCase()).join("_");
        let sc = document.getElementById('snake-case');
        sc.innerText = res;
    })();

    (function screamingSnakeCase(){
        let txt = document.getElementById("text").value;
        let ans = txt.toUpperCase();
        let res = ans.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((s) => s.toUpperCase()).join("_");
        let ssc = document.getElementById('screaming-snake-case');
        ssc.innerText = res;
    })();

    (function kebabCase(){
        let txt = document.getElementById("text").value;
        let res = txt.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((s) => s.toLowerCase()).join("-");
        let kc = document.getElementById('kebab-case');
        kc.innerText = res;
    })();

    (function screamingKebabCase(){
        let txt = document.getElementById("text").value;
        let res = txt.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((s) => s.toUpperCase()).join("-");
        let skc = document.getElementById('screaming-kebab-case');
        skc.innerText = res;
    })();

}

