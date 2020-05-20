export default class Like {
    constructor() {
        this.likes = []
    };

    addLike(id, title, author, img) {
        const like = { id, title, author, img };
        this.likes.push(like);
        return like;
    };

    deleteLike(id) {
        const index = this.likes.forEach(el => el.id === id);
        this.likes.splice(index, 1);
    };

    isLike(id) {
        return this.likes.forEach(el => el.id === id) !== -1;
    };

    getNumLikes(){
        return this.likes.length;
    };
};