export const albumUrl = (productId, stageId) => {
    return `/album/${productId}/${stageId}`
}

export const cameraUrl = (productId, stageId) => {
    return `/camera/${productId}/${stageId}`
}

export const detailImageUrl = (productId, stageId, imageId) => {
    return `/album/${productId}/${stageId}/${imageId}`
}

export const completedStageUrl = (productId, stageId) => {
    return `/info/worker/${productId}/${stageId}`
}

export const productCameraUrl = (productId) => {
    return `/info/worker/${productId}/camera`
}
