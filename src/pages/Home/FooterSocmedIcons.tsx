const FooterSocmedIcons = () => {
    const icons = ['fb-icon', 'ig-icon', 'x-icon', 'mail-icon', 'twitch-icon']

    return (
        <div className="flex gap-4">
            {icons.map((i, index) => {
                return (
                    <a key={index} href="#" className="socmed__icon bg-bcr-blue flex justify-center items-center rounded-full self-start">
                        <div className={`${i} icon--20px svg bg-white`}></div>
                    </a>
                )
            })}
        </div>
    )
}

export default FooterSocmedIcons