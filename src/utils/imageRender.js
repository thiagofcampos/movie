const imageRender = (apiImage) => {
    const image = `https://image.tmdb.org/t/p/w500${apiImage}`;
    return image;
}

export default imageRender;