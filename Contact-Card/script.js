let github = document.querySelector('.gShare')
let leetCode = document.querySelector('.lShare')
let codeForces = document.querySelector('.cShare')
let profileShare = document.querySelector('.share')

github.onclick = () => {
    link = 'https://github.com/MostafaElKaranshawy'
    moka(link)
}
leetCode.onclick = () => {
    link = 'https://leetcode.com/MoKa_5121/'
    moka(link)
}
codeForces.onclick = () => {
    link = 'https://codeforces.com/profile/MostafaKransh'
    moka(link)
}
profileShare.onclick = () => {
    link = 'https://mostafaelkaranshawy.github.io/Portfolio/'
    moka(link)
}

let moka = function (link) {
    if (navigator.share) {
        navigator.share({
            title: 'Shared Content',
            text: 'Check out this content!',
            url: link
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
        } else {
        console.log('Web Share API not supported on this browser.');
    }
}