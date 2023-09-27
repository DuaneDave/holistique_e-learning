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
    id: 4,
    title: 'Stigma Reduction',
    module_count: 'Nine lessons contained in this module',
    duration: '1hr 15mins',
    module_image: course2,
    lessons: [
      {
        id: 1,
        title: 'Lesson one',
        duration: '5mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511908120.sd.mp4?s=ad962a4cc6f8454a6870a18f3cce6a5a83097677&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 2,
        title: 'Lesson two',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/499019255.sd.mp4?s=277b278c5fb04723d80aeecf7fb11fe4f9ab346b&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 3,
        title: 'Lesson three',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/548912494.sd.mp4?s=0ac0580abfe3690fad492c19dc2e6455e0eadf71&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 4,
        title: 'Lesson four',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511908120.sd.mp4?s=ad962a4cc6f8454a6870a18f3cce6a5a83097677&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 5,
        title: 'Lesson five',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511907698.sd.mp4?s=84f046df3e5c876ee3c2c59abc3985fa24427124&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 6,
        title: 'Lesson six',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/425601257.sd.mp4?s=2eca8cf057bd0000c3484fdb382b56a0a0b65d83&profile_id=164&oauth2_token_id=57447761',
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
    lessons: [
      {
        id: 1,
        title: 'Lesson one',
        duration: '5mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511908120.sd.mp4?s=ad962a4cc6f8454a6870a18f3cce6a5a83097677&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 2,
        title: 'Lesson two',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/499019255.sd.mp4?s=277b278c5fb04723d80aeecf7fb11fe4f9ab346b&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 3,
        title: 'Lesson three',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/548912494.sd.mp4?s=0ac0580abfe3690fad492c19dc2e6455e0eadf71&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 4,
        title: 'Lesson four',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511908120.sd.mp4?s=ad962a4cc6f8454a6870a18f3cce6a5a83097677&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 5,
        title: 'Lesson five',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511907698.sd.mp4?s=84f046df3e5c876ee3c2c59abc3985fa24427124&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 6,
        title: 'Lesson six',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/425601257.sd.mp4?s=2eca8cf057bd0000c3484fdb382b56a0a0b65d83&profile_id=164&oauth2_token_id=57447761',
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
    lessons: [
      {
        id: 1,
        title: 'Lesson one',
        duration: '5mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511908120.sd.mp4?s=ad962a4cc6f8454a6870a18f3cce6a5a83097677&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 2,
        title: 'Lesson two',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/499019255.sd.mp4?s=277b278c5fb04723d80aeecf7fb11fe4f9ab346b&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 3,
        title: 'Lesson three',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/548912494.sd.mp4?s=0ac0580abfe3690fad492c19dc2e6455e0eadf71&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 4,
        title: 'Lesson four',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511908120.sd.mp4?s=ad962a4cc6f8454a6870a18f3cce6a5a83097677&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 5,
        title: 'Lesson five',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511907698.sd.mp4?s=84f046df3e5c876ee3c2c59abc3985fa24427124&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 6,
        title: 'Lesson six',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/425601257.sd.mp4?s=2eca8cf057bd0000c3484fdb382b56a0a0b65d83&profile_id=164&oauth2_token_id=57447761',
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
    id: 1,
    title: 'Stigma and discrimination in healthcare',
    module_count: 'Nine lessons contained in this module',
    duration: '1hr 45mins',
    module_image: course4,
    lessons: [
      {
        id: 1,
        title: 'Lesson one',
        duration: '5mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511908120.sd.mp4?s=ad962a4cc6f8454a6870a18f3cce6a5a83097677&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 2,
        title: 'Lesson two',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/499019255.sd.mp4?s=277b278c5fb04723d80aeecf7fb11fe4f9ab346b&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 3,
        title: 'Lesson three',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/548912494.sd.mp4?s=0ac0580abfe3690fad492c19dc2e6455e0eadf71&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 4,
        title: 'Lesson four',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511908120.sd.mp4?s=ad962a4cc6f8454a6870a18f3cce6a5a83097677&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 5,
        title: 'Lesson five',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/511907698.sd.mp4?s=84f046df3e5c876ee3c2c59abc3985fa24427124&profile_id=164&oauth2_token_id=57447761',
      },
      {
        id: 6,
        title: 'Lesson six',
        duration: '10mins',
        course: 'Outline stigma and root course',
        video:
          'https://player.vimeo.com/external/425601257.sd.mp4?s=2eca8cf057bd0000c3484fdb382b56a0a0b65d83&profile_id=164&oauth2_token_id=57447761',
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
