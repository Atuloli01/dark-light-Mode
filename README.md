it is the  code where it will accept the invite from linkedin upto 5 invites at a time
using console 

Array.from(
    document.querySelectorAll(
        '.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.invitation-card__action-btn'
    )
)
    .slice(0, 5)
    .map((item) => item.click())
