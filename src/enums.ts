export function enums() {
    numericEnumsAndReverseMappings();
    stringEnumsAndInliningMembers();
}

function numericEnumsAndReverseMappings() {
    enum Sizes {
        Small,
        Medium,
        Large
    }
    enum Sizes {
        ExtraLarge = 3,
    }
    const selectedSize = 2;

    // console.log(Sizes[selectedSize]);
}

function stringEnumsAndInliningMembers() {
    const enum Sizes {
        Small = 'small',
        Medium = 'medium',
        Large = 'large'
    }

    let selected: Sizes = Sizes.Small;

    function updateSize(size: Sizes): void {
        selected = size;
    }

    updateSize(Sizes.Small);

    console.log(selected);
}
