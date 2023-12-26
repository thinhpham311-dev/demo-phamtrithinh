import { createSlice } from '@reduxjs/toolkit'
import { themeConfig } from 'configs/theme.config'
import {
	LAYOUT_TYPE_MODERN,
	NAV_MODE_TRANSPARENT,
	NAV_MODE_THEMED,
} from 'constants/theme.constant'

const initialNavMode = () => {

	if (themeConfig.layout.type === LAYOUT_TYPE_MODERN && themeConfig.navMode !== NAV_MODE_THEMED) {
		return NAV_MODE_TRANSPARENT
	}

	return themeConfig.navMode
}

const initialState = {
	themeColor: themeConfig.themeColor,
	direction: themeConfig.direction,
	mode: themeConfig.mode,
	locale: themeConfig.locale,
	primaryColorLevel: themeConfig.primaryColorLevel,
	panelExpand: themeConfig.panelExpand,
	navMode: initialNavMode(),
	layout: themeConfig.layout
}


export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setDirection: (state, action) => {
			state.direction = action.payload
		},
		setMode: (state, action) => {
			state.mode = action.payload
		},
		setLayout: (state, action) => {
			state.cardBordered = action.payload === LAYOUT_TYPE_MODERN
			if (action.payload === LAYOUT_TYPE_MODERN) {
				state.navMode = NAV_MODE_TRANSPARENT
			}

			state.layout = {
				...state.layout,
				...{ type: action.payload }
			}
		},
		setPreviousLayout: (state, action) => {
			state.layout.previousType = action.payload
		},
		setSideNavCollapse: (state, action) => {
			state.layout = {
				...state.layout,
				...{ sideNavCollapse: action.payload }
			}
		},
		setNavMode: (state, action) => {
			if (action.payload !== 'default') {
				state.navMode = action.payload
			} else {
				if (state.layout.type === LAYOUT_TYPE_MODERN) {
					state.navMode = NAV_MODE_TRANSPARENT
				}
			}
		},
		setPanelExpand: (state, action) => {
			state.panelExpand = action.payload
		},
		setThemeColor: (state, action) => {
			state.themeColor = action.payload
		},
		setThemeColorLevel: (state, action) => {
			state.primaryColorLevel = action.payload
		},
	},
})

export const {
	setDirection,
	setMode,
	setLang,
	setLayout,
	setSideNavCollapse,
	setNavMode,
	setPanelExpand,
	setThemeColor,
	setThemeColorLevel,
	setPreviousLayout
} = themeSlice.actions

export default themeSlice.reducer