
Barba.Pjax.start();

window.addEventListener('load', pageTransition);

function pageTransition() {
    let FadeTransition = Barba.BaseTransition.extend({
        start: function () {

            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },
        fadeOut: function () { },
        fadeIn: function () {
            this.newContainer.classList.add('slideIn');
            let that = this;
            this.newContainer.addEventListener('animationend', function () {
                that.newContainer.classList.remove('slideIn');
            });
        }
    });
    Barba.Pjax.getTransition = function(){
        return FadeTransition;
    };
}
