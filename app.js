/* --------------- Utility Function ----------- */

//Create a DOM element with optional text,class and attributes

function buildElement(tag, text = '', className = '', attributes = {}, children = []) {
  const el = document.createElement(tag)

  if (text) el.textContent = text
  if (className) el.className = className

  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value)
  })

  children.forEach(child => el.appendChild(child)) //For every child in the children array, attach that 
  // child as a child node of the element you're building (el).

  return el
}

/* ------------------ DOM CONSTRUCTION ---------- */
const mainGrid = document.querySelector('.main-grid')

/* Image section */
const drawerImg = buildElement('img','','drawers-img',{
    src:'images/drawers.jpg',
    alt:'Drawers Icon'
})
             
const imgDiv = buildElement('div','','img-div',{},[drawerImg])

const imageSection = buildElement('section','','image-section',{},[imgDiv])

const mainTitle = buildElement('h1',`Shift the overall look and feel by adding these wonderful touches to furniture in your home`,
                               'main-title')

const titleContainer = buildElement('div','','title-container',{},[mainTitle])

const descriptionText = buildElement('p',`Ever been in a room and felt like something was missing? 
                                     Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any 
                                     room feel complete.`,'description-text')

const paragraphContainer = buildElement('div','','paragraph-container',{},[descriptionText])        

const profileImg = buildElement('img','','profile-pic',{
                   src:'images/avatar-michelle.jpg',
                   alt:'Profile Pic'
})

const authorAvatar = buildElement('div','','author-avatar',{},[profileImg])
const authorInfo = buildElement('div','','author-info',{},[authorAvatar])
const personName = buildElement('p',`Michelle Appleton`)
const authorName = buildElement('div','','author-name',{},[personName])
const profileDate = buildElement('p',`28 Jun 2020`)
const publishDate = buildElement('div','','publish-date',{},[profileDate])

const authorDetails = buildElement('div','','author-details',{},[authorName,publishDate])

const facebookIcon = buildElement('img','','fb-icon icon',{
                   src:'images/icon-facebook.svg',
                   alt:'Facebook Icon'
})
const twitterIcon = buildElement('img','','twitter-icon icon',{
                   src:'images/icon-twitter.svg',
                   alt:'Twitter Icon'
})
const pInterestIcon = buildElement('img','','pinterest-icon icon',{
                   src:'images/icon-pinterest.svg',
                   alt:'Pinterest Icon'
})
const shareLabel = buildElement('span',`Share`,'share-label')
const tooltip = buildElement('span','','tooltip',{},[shareLabel,facebookIcon,twitterIcon,pInterestIcon])

const btnImg = buildElement('img','','share-btn',{
                   src:'images/icon-share.svg',
                   alt:'Share Icon'
})
const shareBtn = buildElement('button','','share-button',{},[btnImg])
const iconShare = buildElement('div','','icon-share',{},[tooltip,shareBtn])

const shareIconContainer = buildElement('div','','share-icons-container',{},[iconShare])

const authorContainer = buildElement('div','','author-share-container',{},[authorInfo,authorDetails,shareIconContainer])

const descriptionSection = buildElement('section','','description-section',{},[titleContainer,paragraphContainer,authorContainer])

mainGrid.append(imageSection,descriptionSection)


/* ------------------LOGIC --------------------- */
let isTooltipVisible = false

function resetStyles() {
  tooltip.classList.remove('visible')
  shareBtn.style = ''
  btnImg.style.filter = ''
  authorInfo.style.display = 'block'
  authorDetails.style.display = 'block'
  authorContainer.style = ''
  isTooltipVisible = false
}

function applyMobileStyles() {
  tooltip.classList.add('visible')
  shareBtn.style.height = '1.88rem'
  shareBtn.style.marginLeft = '14.69rem'
  shareBtn.style.backgroundColor = 'hsl(214, 17%, 51%)'
  shareBtn.style.transform = 'translateY(-5px)'
  btnImg.style.filter = 'brightness(0) invert(1)'
  authorInfo.style.display = 'none'
  authorDetails.style.display = 'none'
  authorContainer.style.backgroundColor = 'hsl(217, 19%, 35%)'
  authorContainer.style.paddingTop = '1.25rem'
  authorContainer.style.paddingBottom = '0.63rem'
  isTooltipVisible = true
}

shareBtn.addEventListener('click', function () {
  const isDesktop = window.matchMedia('(min-width: 600px)').matches

  if (isDesktop) {
    // Toggle tooltip visibility for desktop
    tooltip.classList.toggle('visible')
    isTooltipVisible = tooltip.classList.contains('visible')

    if (isTooltipVisible) {
      // Apply button styles for desktop
      shareBtn.style.backgroundColor = 'hsl(214, 17%, 51%)'
      btnImg.style.filter = 'brightness(0) invert(1)'
    } else {
      // Reset styles when tooltip is hidden
      resetStyles()
    }

    // Ensure rest of layout is always desktop-clean
    authorInfo.style.display = 'block'
    authorDetails.style.display = 'block'
    authorContainer.style = ''
  } else {
    // Mobile toggle logic
    if (!isTooltipVisible) {
      applyMobileStyles()
    } else {
      resetStyles()
    }
  }
})

window.addEventListener('resize', function () {
  resetStyles()
})