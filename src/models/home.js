import axios from 'axios'

export default {
  namespace: 'home',
  state: {
    activity: {
      page: 1,
      size: 10,
      dataset: [],
      more: true,
    },
    training: {
      page: 1,
      size: 10,
      dataset: [],
      more: true,
    },
  },
  reducers: {
    fetchActivityList__(state, { activity }) {
      state.activity = activity
    },
    fetchTrainingList__(state, { training }) {
      state.training = training
    }
  },
  effects: {
    *fetchActivityList({ payload = {} }, { put, select }) {
      const state = yield select(state => state.home.activity)
      // 没有更多数据
      if (!state.more) {
        return
      }
      const page = payload.page || state.page
      const ret = yield axios.get(`http://api.zentrust.cn/mobile/activity?current=${page}&size=${state.size}`).then(ret => ret.data)
      if (+ret.code !== 0) {
        return
      }

      const activity = {
        ...state,
        page,
        dataset: page === 1 ? ret.dataset : [
          ...state.dataset,
          ...ret.dataset,
        ]
      }

      if (!ret.dataset.length) {
        activity['more'] = false
      }

      yield put({ type: 'fetchActivityList__', activity })
    },
    *fetchTrainingList({ payload = {} }, { put, select }) {
      const state = yield select(state => state.home.training)
      // 没有更多数据
      if (!state.more) {
        return
      }
      const page = payload.page || state.page
      const ret = yield axios.get(`http://api.zentrust.cn/mobile/training?current=${page}&size=${state.size}`).then(ret => ret.data)
      if (+ret.code !== 0) {
        return
      }

      const training = {
        ...state,
        page,
        dataset: page === 1 ? ret.dataset : [
          ...state.dataset,
          ...ret.dataset,
        ]
      }

      if (!ret.dataset.length) {
        training['more'] = false
      }

      yield put({ type: 'fetchTrainingList__', training })
    }
  },
};
