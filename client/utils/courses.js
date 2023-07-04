import avatar from '@public/assets/icons/avatar.png';
import course1 from '@public/assets/images/course1.png';
import course2 from '@public/assets/images/course2.png';
import course3 from '@public/assets/images/course3.png';
import course4 from '@public/assets/images/courseAvailable.png';

const coursesProgress = [
  {
    id: 1,
    title: 'Harm reduction principles',
    total_lessons: 7,
    completed_lessons: 5,
    course_image: course1,
    author_image: avatar,
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Stigma reduction',
    total_lessons: 4,
    completed_lessons: 2,
    course_image: course2,
    author_image: avatar,
    author: 'John Doe',
  },
  {
    id: 3,
    title: 'Skin and soft tissue',
    total_lessons: 6,
    completed_lessons: 5,
    course_image: course3,
    author_image: avatar,
    author: 'John Doe',
  },
  {
    id: 4,
    title: 'Skin and soft tissue',
    total_lessons: 6,
    completed_lessons: 5,
    course_image: course3,
    author_image: avatar,
    author: 'John Doe',
  },
];

export const availableModule = [
  {
    id: 1,
    title: 'Stigma and discrimination in healthcare',
    module_count: 'Nine lessons contained in this module',
    duration: '1hr 45mins',
    module_image: course4,
    video:
      'https://vod-progressive.akamaized.net/exp=1688353380~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4848%2F18%2F474244076%2F2114654487.mp4~hmac=0c0b12a6547c707c4d7c0da24d97f51ed3dd19df464c676c48fc0ecd737a431c/vimeo-prod-skyfire-std-us/01/4848/18/474244076/2114654487.mp4',
    lessons: [
      {
        id: 1,
        title: 'Lesson one',
        duration: '5mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 2,
        title: 'Lesson two',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 3,
        title: 'Lesson three',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 4,
        title: 'Lesson four',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 5,
        title: 'Lesson five',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 6,
        title: 'Lesson six',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
    ],
    assessment: {
      duration: '10mins',
    },
    comments: [
      {
        id: 1,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 2,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 3,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
    ],
    transcript: `
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    `,
    comments: [
      {
        id: 1,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 2,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 3,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 4,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 5,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 6,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 7,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 8,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 9,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 10,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
    ],
  },
  {
    id: 2,
    title: 'Skin and soft tissue infections',
    module_count: 'Six lessons contained in this module',
    duration: '1hr 15mins',
    module_image: course3,
    video:
      'https://vod-progressive.akamaized.net/exp=1688353380~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4848%2F18%2F474244076%2F2114654487.mp4~hmac=0c0b12a6547c707c4d7c0da24d97f51ed3dd19df464c676c48fc0ecd737a431c/vimeo-prod-skyfire-std-us/01/4848/18/474244076/2114654487.mp4',
    lessons: [
      {
        id: 1,
        title: 'Lesson one',
        duration: '5mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 2,
        title: 'Lesson two',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 3,
        title: 'Lesson three',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 4,
        title: 'Lesson four',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 5,
        title: 'Lesson five',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 6,
        title: 'Lesson six',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
    ],
    assessment: {
      duration: '10mins',
    },
    comments: [
      {
        id: 1,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 2,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 3,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
    ],
    transcript: `
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    `,
    comments: [
      {
        id: 1,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 2,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 3,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 4,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 5,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 6,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 7,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 8,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 9,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 10,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
    ],
  },
  {
    id: 3,
    title: 'Harm Reduction',
    module_count: 'Nine lessons contained in this module',
    duration: '1hr 45mins',
    module_image: course1,
    video:
      'https://vod-progressive.akamaized.net/exp=1688353380~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4848%2F18%2F474244076%2F2114654487.mp4~hmac=0c0b12a6547c707c4d7c0da24d97f51ed3dd19df464c676c48fc0ecd737a431c/vimeo-prod-skyfire-std-us/01/4848/18/474244076/2114654487.mp4',
    lessons: [
      {
        id: 1,
        title: 'Lesson one',
        duration: '5mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 2,
        title: 'Lesson two',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 3,
        title: 'Lesson three',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 4,
        title: 'Lesson four',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 5,
        title: 'Lesson five',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 6,
        title: 'Lesson six',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
    ],
    assessment: {
      duration: '10mins',
    },
    comments: [
      {
        id: 1,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 2,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 3,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
    ],
    transcript: `
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    `,
    comments: [
      {
        id: 1,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 2,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 3,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 4,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 5,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 6,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 7,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 8,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 9,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 10,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
    ],
  },
  {
    id: 4,
    title: 'Stigma Reduction',
    module_count: 'Nine lessons contained in this module',
    duration: '1hr 15mins',
    module_image: course2,
    video:
      'https://vod-progressive.akamaized.net/exp=1688353380~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4848%2F18%2F474244076%2F2114654487.mp4~hmac=0c0b12a6547c707c4d7c0da24d97f51ed3dd19df464c676c48fc0ecd737a431c/vimeo-prod-skyfire-std-us/01/4848/18/474244076/2114654487.mp4',
    lessons: [
      {
        id: 1,
        title: 'Lesson one',
        duration: '5mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 2,
        title: 'Lesson two',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 3,
        title: 'Lesson three',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 4,
        title: 'Lesson four',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 5,
        title: 'Lesson five',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
      {
        id: 6,
        title: 'Lesson six',
        duration: '10mins',
        course: 'Outline stigma and root course',
      },
    ],
    assessment: {
      duration: '10mins',
    },
    comments: [
      {
        id: 1,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 2,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 3,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
    ],
    transcript: `
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    Lorem ipsum dolor sit amet consectetur. Et sed at odio massa nec eleifend. Venenatis justo ut elementum tellus at non. Semper fusce tristique at curabitur porta blandit placerat nunc vitae. Nunc euismod ullamcorper nulla mauris. Purus mauris sagittis nunc in ultricies nunc aliquet aliquam. Non nunc quam pulvinar nulla ullamcorper maecenas.
    Faucibus egestas pharetra sed pulvinar. Consequat massa urna phasellus orci amet. Elit pretium nisi in nunc maecenas ut faucibus facilisis diam. In at turpis urna nec porttitor mauris nibh aliquet nunc. Turpis eu sed nunc purus amet enim id diam. Vel quisque vitae feugiat amet eget. Auctor sem etiam etiam fames mi neque consequat sit eget. In adipiscing tristique tempor nibh est. Lectus quis vel pulvinar quam id mauris vitae. Ut suspendisse sed orci amet scelerisque integer feugiat. Quam morbi nisl pellentesque amet nec faucibus mauris eu purus. Sagittis lacinia pharetra at neque. Lorem viverra arcu vel quisque. Dictum arcu lobortis interdum aliquam egestas.
    `,
    comments: [
      {
        id: 1,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 2,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 3,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 4,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 5,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 6,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 7,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 8,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 9,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
      {
        id: 10,
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Quisque mi ut quam ultrices varius sit non cras. Elementum pharetra quis in elementum scelerisque dictum vitae ut. Ut ornare condimentum consequat et amet ultricies purus.',
        likes: 10,
        dislikes: 2,
        image: avatar,
      },
    ],
  },
];

export default coursesProgress;
