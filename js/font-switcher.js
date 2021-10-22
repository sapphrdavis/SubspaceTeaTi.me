
// From https://stackoverflow.com/a/11174581/453435

function setupDeselectEvent() {
    var selected = {};
    $('input[type="radio"]').on('click', function() {
        if (this.name in selected && this != selected[this.name])
            $(selected[this.name]).trigger("deselect");
        selected[this.name] = this;
    }).filter(':checked').each(function() {
        selected[this.name] = this;
    });
}


$(_ => {
    setupDeselectEvent()

    $("[data-apply-class-to-root-when-checked]").off("select") // Disable any hooks from outside libraries

    $("[data-apply-class-to-root-when-checked]").on("select", event => {
        // console.log(this.checked)
        // console.log(event.currentTarget.labels[0].classList.value + ' is ' + (event.currentTarget.checked ? 'checked' : 'unchecked'))
        const element = event.currentTarget
        if (element) {
            const newRootClass = $(element).data("applyClassToRootWhenChecked")
            if (newRootClass) {
                $(":root").addClass(newRootClass)
            }
        }
    })

    $("[data-apply-class-to-root-when-checked]").on("deselect", event => {
        // console.log(this.checked)
        // console.log(event.currentTarget.labels[0].classList.value + ' is ' + (event.currentTarget.checked ? 'checked' : 'unchecked'))
        const element = event.currentTarget
        if (element) {
            const newRootClass = $(element).data("applyClassToRootWhenChecked")
            if (newRootClass) {
                $(":root").removeClass(newRootClass)
            }
        }
    })
})
