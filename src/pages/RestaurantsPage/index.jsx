import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from '../../store/actions';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <h1>레스토랑 리스트</h1>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
