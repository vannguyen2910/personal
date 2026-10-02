// TEMPLATE: the slide deck and mentee homework shown next to the lesson text.

// Paste a link that can be shown inside a page: a Google Slides "Publish to web" link,
// or a PDF in public/ (for example '/templates/text/slides.pdf'). Leave empty to show a placeholder.
export const slidesUrl = ''

// One entry per example. `assignment` is the group heading.
// Copy the image into public/templates/text/homework/ first. Only share work the mentee agreed to share.
export const homework = [
  {
    assignment: 'Assignment 1 — Set Up Your Design Process',
    mentee: 'Anh',
    title: 'Strand Butler process',
    image: '/templates/text/homework/Anh-Truong-Strand-Butler-Process.png',
  },
  {
    assignment: 'Assignment 1 — Set Up Your Design Process',
    mentee: 'Tam',
    title: 'Double Diamond process',
    image: '/templates/text/homework/Tam-Nguyen-Design-Process-Double-Diamond.png',
  },
  {
    assignment: 'Assignment 2 — Complete the Design Brief',
    mentee: 'Mentee name',
    title: 'Example coming soon',
    image: '',
  },
]

// Where the Previous / Next lesson cards go. The key is the lesson title from the front matter.
// Here they point at this template so you can try the click; replace with the real lesson addresses.
// A lesson left out of this list is shown without a link.
export const relatedLinks = {
  'Customer Understanding': '/templates/text.html',
}

// Where the Program name in the lesson details goes. The key is the `program` value from the front matter.
// Here it points at the program template so you can try the click; replace with the real program page.
export const programLinks = {
  'ux-class': '/templates/program.html',
}
