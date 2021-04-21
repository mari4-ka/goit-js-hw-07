const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageListEl = document.querySelector('#gallery')

const createImagesList = options => {
    return options.map(option => {
        const liEl = document.createElement('li');
        liEl.insertAdjacentHTML("beforeend",
            `<img src=${option.url} alt='${option.alt}' width=320>`);
          
        console.log(liEl);

        return liEl;
    });
};

const imageList = createImagesList(images);
imageListEl.append(...imageList);

imageListEl.style.display = 'flex';
imageListEl.style.flexDirection = 'column';
imageListEl.style.listStyleType = 'none';