"use strict";
document.addEventListener("DOMContentLoaded", () =>
{
    // Image Loader //////////////////////////////////////////////////////////////////
    let uploadProf = document.getElementById("uploadProf"),
        uploadSig = document.getElementById("uploadSig"),
        chooseProf = document.getElementById("chooseProf"),
        chooseSig = document.getElementById("chooseSig"),
        imageProf = document.getElementById("imageProf"),
        imageSig = document.getElementById("imageSig");

    chooseProf.addEventListener("change", (event) =>
    {
        handleFileUpload(event.target.files[0], imageProf);
    });
    chooseSig.addEventListener("change", (event) =>
    {
        handleFileUpload(event.target.files[0], imageSig);
        let sigDisplay = parseFloat(Math.round(event.target.files[0].size / 1024));
        if (sigDisplay > 1024)
        {
            imageSig.style.display = 'none';
        }
        else
        {
            imageSig.style.display = 'block';
        }
    });
    uploadProf.addEventListener("click", () =>
    {
        chooseProf.click();
        chooseProf.value = "";
    });
    uploadSig.addEventListener("click", () =>
    {
        chooseSig.click();
    });
    function handleFileUpload(file, targetImg)
    {
        let size = parseFloat(file.size),
            sizeKB = Math.round(size / 1024),
            maxSize = 1024;
        if (file && sizeKB <= maxSize)
        {
            const reader = new FileReader();
            reader.onload = (e) =>
            {
                targetImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else 
        {
            alert.style.display = 'block';
            shadow.style.display = 'block';
            errlist();
            liElem.appendChild(document.createTextNode('File size should be maximum 1MB and the current file size is ' + Math.round(sizeKB / 1024) + 'MB'));
        }
    }

    // Input field validation////////////////////////////////////////////////////////////////////// 
    let input = document.querySelectorAll('.form-control');
    function inpValidate()
    {
        input.forEach((inputField) =>
        {
            inputField.addEventListener("blur", () =>
            {
                //debugger;
                let value = inputField.value.trim();
                //let warnMsg = editableText.querySelector('.invalid-feedback')
                if (value === "")
                {
                    inputField.nextElementSibling.style.display = "block";
                } else
                {
                    inputField.nextElementSibling.style.display = "none";
                }
            });
        })
    };
    inpValidate();

    // Rating Start Aive Element //////////////////////////////////////////////////////////////////
    const ratingStar = document.querySelectorAll('.star-icon li');
    ratingStar.forEach((star, index1) =>
    {
        star.addEventListener("click", () =>
        {
            ratingStar.forEach((star, index2) =>
            {
                index1 >= index2 ? star.classList.add('active_star') : star.classList.remove('active_star');
            });
        })
    });


    // Validation for preview ////////////////////////////////////////////////////////////////////
    //Rating =>
    let prevBTN = document.getElementById("prevButton"),
        starIcons = document.getElementById('starIcon'),
        alert = document.getElementById('dangerAlert'),
        shadow = document.getElementById('alertShadow'),
        alertClose = document.getElementById('alertClose'),
        imageProfSrc = imageProf.getAttribute('src'),
        ErrList = document.querySelector('#error'),
        liElem = document.createElement('li'),
        iElem = document.createElement('i');
    iElem.className = "fas fa-times-circle me-1";
    function errlist()
    {
        ErrList.appendChild(liElem);
        liElem.appendChild(iElem);
    }
    //debugger;
    prevBTN.addEventListener('click', () =>
    {
        debugger;
        let mImageProf = document.getElementById('mImageProf'),
            mImageSig = document.getElementById('mImageSig'),
            mHead = document.getElementById('mHead'),
            mSubHead = document.getElementById('mSubHead'),
            mComment = document.getElementById('mComment'),
            mName = document.getElementById('mName'),
            mDesig = document.getElementById('mDesig'),
            orgaisationName = document.getElementById('orgaisationName'),
            departmentName = document.getElementById('departmentName'),
            exampleFormControlTextarea1 = document.getElementById('exampleFormControlTextarea1'),
            name = document.getElementById('name'),
            designation = document.getElementById('designation'),
            mRating = document.getElementById('mRating');
        if (!validate())
        {
            $('#exampleModal').modal('hide');
            return false;
        }
        else if (!inp())
        {
            $('#exampleModal').modal('hide');
            return false;
        }
        mImageProf.setAttribute('src', imageProf.attributes[0].value);
        mImageSig.setAttribute('src', imageSig.attributes[0].value);
        mHead.innerText = orgaisationName.value;
        mSubHead.innerText = departmentName.value;
        mComment.innerText = exampleFormControlTextarea1.value;
        mName.innerText = name.value;
        mDesig.innerText = designation.value;
        mRating.innerHTML = starIcons.innerHTML;
        $('#exampleModal').modal('show');
    });
    function inp()
    {
        let isInputValid = true;

        input.forEach((inputField) =>
        {
            let value = inputField.value.trim();
            if (value === "")
            {
                inputField.nextElementSibling.style.display = "block";
                isInputValid = false;
            }
        });

        return isInputValid;
    }
    function validate()
    {
        let eachIcon = starIcons.querySelectorAll('li.active_star'),
            imageSigSrc = imageSig.getAttribute('src');

        //debugger;
        if (eachIcon.length == 0)
        {
            alert.style.display = 'block';
            shadow.style.display = 'block';
            errlist();
            liElem.appendChild(document.createTextNode('Please rate us'));
            return false;
        } else if (imageProfSrc === imageProf.attributes[0].value)
        {
            alert.style.display = 'block';
            shadow.style.display = 'block';
            errlist();
            liElem.appendChild(document.createTextNode('Please upload your profile picture'));
            return false;
        } else if (imageSigSrc === '')
        {
            alert.style.display = 'block';
            shadow.style.display = 'block';
            errlist();
            liElem.appendChild(document.createTextNode('Please upload your signature'));
            return false;
        }
        return true;
    }
    alertClose.addEventListener('click', () =>
    {
        alert.style.display = 'none';
        shadow.style.display = 'none';
        liElem.remove();
        liElem.textContent = ''

    })
});