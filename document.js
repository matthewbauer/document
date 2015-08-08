let __global
if (typeof window !== 'undefined') {
	__global = window.document
} else {
	__global = {}
}

function fill (name) {
	if (__global[name]) {
		return __global[name]
	}
}

let registerElement = fill('registerElement')
export {
	registerElement
}

export default __global
