import { v1 } from "uuid";
import { filterGroupHeaderReducer } from "./filterGroupHeaderReducer";
import { categoryFilterReducer } from "./categoryFilterReducer";
import { rangeFilterReducer } from "./rangeFilterReducer";

export let store = {
    _state: {
        filterGroupHeader: {
            filterHeaders: [
                { id: v1(), title: 'Фильтр по типу', visibility: true},
                { id: v1(), title: 'Фильтры оружия', visibility: true},
                { id: v1(), title: 'Фильтры защиты', visibility: true},
                { id: v1(), title: 'Требования', visibility: true},
                { id: v1(), title: 'Фильтр свойств', visibility: true}
            ],
        },
        categoryFilter: {
            // categories: [
            //     {id: v1(), option: 'Все'},
            //     {id: v1(), option: 'Любое оружие'},
            //     {id: v1(), option: 'Одноручное оружие'},
            //     {id: v1(), option: 'Любой доспех'},
            //     {id: v1(), option: 'Перчатки'},
            // ],
            // rarity: [
            //     {id: v1(), option: 'Все'},
            //     {id: v1(), option: 'Обычный'},
            //     {id: v1(), option: 'Волшебный'},
            //     {id: v1(), option: 'Редкий'},
            //     {id: v1(), option: 'Уникальный'},
            // ],
            typeFilters: [
                {id: v1(), title: 'Категория предмета', header: 'Фильтр по типу', 
                content: [
                    {id: v1(), option: 'Все'},
                    {id: v1(), option: 'Любое оружие'},
                    {id: v1(), option: 'Одноручное оружие'},
                    {id: v1(), option: 'Любой доспех'},
                    {id: v1(), option: 'Перчатки'},
                ], 
                state: false, filterValue: 'Все'},
                {id: v1(), title: 'Редкость предмета', header: 'Фильтр по типу', 
                content: [
                    {id: v1(), option: 'Все'},
                    {id: v1(), option: 'Обычный'},
                    {id: v1(), option: 'Волшебный'},
                    {id: v1(), option: 'Редкий'},
                    {id: v1(), option: 'Уникальный'},
                ], 
                state: false, filterValue: 'Все'},
            ],
        },
        rangeFilter: {
            rangeFilters: [
                {id: v1(), title: 'Урон', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Шанс критического удара', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Атак в секунду', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Урон в секунду', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Броня', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Уклонение', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Энергетический щит', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Блок', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Уровень', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Сила', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Ловкость', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
                {id: v1(), title: 'Интеллект', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
            ],
            // newMinInputValue: '',
            // newMaxInputValue: ''
        }, 
    },
    _callSubsrciber(state: any){
        console.log(' ')
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubsrciber = observer
    },
    dispatch(action: any) {
        this._state.filterGroupHeader = filterGroupHeaderReducer(this._state.filterGroupHeader, action)
        this._state.categoryFilter = categoryFilterReducer(this._state.categoryFilter, action)
        this._state.rangeFilter = rangeFilterReducer(this._state.rangeFilter, action)

        this._callSubsrciber(this._state)
    }
}