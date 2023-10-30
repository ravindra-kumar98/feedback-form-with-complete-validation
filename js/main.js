"use strict";
document.addEventListener("DOMContentLoaded", () =>
{
    let e = document.getElementById("uploadProf"),
        t = document.getElementById("uploadSig"),
        l = document.getElementById("chooseProf"),
        n = document.getElementById("chooseSig"),
        a = document.getElementById("imageProf"),
        i = document.getElementById("imageSig");
    function d(e, t)
    {
        let l = Math.round(parseFloat(e.size) / 1024);
        if (e && l <= 1024)
        {
            let n = new FileReader();
            (n.onload = (e) =>
            {
                t.src = e.target.result;
            }),
                n.readAsDataURL(e);
        } else (y.style.display = "block"), (g.style.display = "block"), I(), v.appendChild(document.createTextNode("File size should be maximum 1MB and the current file size is " + Math.round(l / 1024) + "MB"));
    }
    l.addEventListener("change", (e) =>
    {
        d(e.target.files[0], a);
    }),
        n.addEventListener("change", (e) =>
        {
            d(e.target.files[0], i);
            parseFloat(Math.round(e.target.files[0].size / 1024)) > 1024 ? (i.style.display = "none") : (i.style.display = "block");
        }),
        e.addEventListener("click", () =>
        {
            l.click(), (l.value = "");
        }),
        t.addEventListener("click", () =>
        {
            n.click();
        });
    let r = document.querySelectorAll(".form-control");
    function s()
    {
        r.forEach((e) =>
        {
            e.addEventListener("blur", () =>
            {
                "" === e.value.trim() ? (e.nextElementSibling.style.display = "block") : (e.nextElementSibling.style.display = "none");
            });
        });
    }
    s();
    let o = document.querySelectorAll(".star-icon li");
    o.forEach((e, t) =>
    {
        e.addEventListener("click", () =>
        {
            o.forEach((e, l) =>
            {
                t >= l ? e.classList.add("active_star") : e.classList.remove("active_star");
            });
        });
    });
    let c = document.getElementById("prevButton"),
        m = document.getElementById("starIcon"),
        y = document.getElementById("dangerAlert"),
        g = document.getElementById("alertShadow"),
        u = document.getElementById("alertClose"),
        E = a.getAttribute("src"),
        p = document.querySelector("#error"),
        v = document.createElement("li"),
        B = document.createElement("i");
    function I()
    {
        p.appendChild(v), v.appendChild(B);
    }
    function b()
    {
        let e = !0;
        return (
            r.forEach((t) =>
            {
                "" === t.value.trim() && ((t.nextElementSibling.style.display = "block"), (e = !1));
            }),
            e
        );
    }
    function f()
    {
        let e = m.querySelectorAll("li.active_star"),
            t = i.getAttribute("src");
        return 0 == e.length
            ? ((y.style.display = "block"), (g.style.display = "block"), I(), v.appendChild(document.createTextNode("Please rate us")), !1)
            : E === a.attributes[0].value
                ? ((y.style.display = "block"), (g.style.display = "block"), I(), v.appendChild(document.createTextNode("Please upload your profile picture")), !1)
                : "" !== t || ((y.style.display = "block"), (g.style.display = "block"), I(), v.appendChild(document.createTextNode("Please upload your signature")), !1);
    }
    (B.className = "fas fa-times-circle me-1"),
        c.addEventListener("click", () =>
        {
            let e = document.getElementById("mImageProf"),
                t = document.getElementById("mImageSig"),
                l = document.getElementById("mHead"),
                n = document.getElementById("mSubHead"),
                d = document.getElementById("mComment"),
                r = document.getElementById("mName"),
                s = document.getElementById("mDesig"),
                o = document.getElementById("orgaisationName"),
                c = document.getElementById("departmentName"),
                y = document.getElementById("exampleFormControlTextarea1"),
                g = document.getElementById("name"),
                u = document.getElementById("designation"),
                E = document.getElementById("mRating");
            return f() && b()
                ? void (e.setAttribute("src", a.attributes[0].value),
                    t.setAttribute("src", i.attributes[0].value),
                    (l.innerText = o.value),
                    (n.innerText = c.value),
                    (d.innerText = y.value),
                    (r.innerText = g.value),
                    (s.innerText = u.value),
                    (E.innerHTML = m.innerHTML),
                    $("#exampleModal").modal("show"))
                : ($("#exampleModal").modal("hide"), !1);
        }),
        u.addEventListener("click", () =>
        {
            (y.style.display = "none"), (g.style.display = "none"), v.remove(), (v.textContent = "");
        });
});
