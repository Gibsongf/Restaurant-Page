function  getAllImgs(imgs_files,contentDescription) {
    const folder_content = {};
    const name_src = imgs_files.keys();
    name_src.forEach(
    (key) =>
        (folder_content[key] = [imgs_files(key), contentDescription[name_src.indexOf(key)]])
    );
    return folder_content
}

function getNameDescriptionSrc(value) {
    const name = value[1].split(",")[0];
    const description =  value[1];
    const src = value[0];
    return [name, description, src];
}

export {getNameDescriptionSrc, getAllImgs}