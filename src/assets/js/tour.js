(function () {
    "use strict";

    const tour = new Shepherd.Tour({
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            },
            classes: 'class-1 class-2',
            scrollTo: { behavior: 'smooth', block: 'center' }
        },
        useModalOverlay: {
            enabled: true,
        }
    });

    tour.addStep({
        id: 'step-1',
        title: "Welcome To Our Tour App",
        text: 'Tailor your travel experience with handpicked destinations, activities, and accommodations suited to your preferences.',
        attachTo: {
            element: '#step-1',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-2',
        title: "Pick a place",
        text: 'Selecting a destination can be exciting! share your preferences or interests.',
        attachTo: {
            element: '#step-2',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-3',
        title: "Travel Budget",
        text: 'Tips for Saving, Spending, and Making the Most of Every Dollar.',
        attachTo: {
            element: '#step-3',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-4',
        title: "Your Travel Options",
        text: 'Your comprehensive Guide to Smooth Travel Planning.',
        attachTo: {
            element: '#step-4',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-5',
        title: "Payment Methods",
        text: 'Various payment options available to make your transactions secure.',
        attachTo: {
            element: '#step-5',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-6',
        title: "Confirm Booking",
        text: 'Verifying every detail and securing reservations for a stress-free trip ahead.',
        attachTo: {
            element: '#step-6',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next,
            },
        ],
    });
    
    tour.addStep({
        id: 'step-7',
        title: "Start Your Journey",
        text: 'New experiences, create unforgettable memories, and ignite your spirit of adventure.',
        attachTo: {
            element: '#step-7',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'Finish',
                action: tour.next,
            },
        ],
    });

    tour.start();

})();