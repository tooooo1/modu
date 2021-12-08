import axios from 'axios';

/**
 * 메뉴 리스트 조회
 * @returns {Promise}
 */
const getMenuList = function () {
    return axios.get('/category/list');
};

/**
 * 게시판 리스트 조회
 * @param {object} boardInfo : 요청 객체 (catId, count, page)
 */
const getBoardList = function (boardInfo) {
    return axios({
        url: '/board/list',
        method: 'GET',
        params: {
            catId: boardInfo.catId,
            page: boardInfo.page,
            count: boardInfo.count
        }
    });
};

export {getMenuList, getBoardList};