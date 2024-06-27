import WhyItem from "../../components/WhyItem"

const WhyList = () => {
    const reasons = [
        {
            icon: 'thumb-icon',
            color: 'bg-bcr-warning',
            main: 'Mobil Lengkap',
            desc: 'Ada banyak pililihan mobil yang pastinya masih baru, bersih dan terawat!'
        },
        {
            icon: 'tag-icon',
            color: 'bg-bcr-danger',
            main: 'Harga Murah dan Bersaing',
            desc: 'Tentu bisa dibandingkan dengan rental mobil lain.'
        },
        {
            icon: 'clock-icon',
            color: 'bg-bcr-blue',
            main: 'Layanan 24 jam',
            desc: 'Siap melayani kamu kapanpun kamu butuh. Kami juga tersedia selama week-end, lho!'
        },
        {
            icon: 'medal-icon',
            color: 'bg-bcr-limegreen',
            main: 'Sopir Profesional',
            desc: 'Dan tentunya berpengalaman, jujur, ramah, selalu tepat waktu, dan keren. 😎'
        }
    ]

    return (
        <div className="why__items-container flex flex-col justify-between gap-4 sm:flex-row">
            {reasons.map((r, i) => {
                return (
                    <WhyItem key={i} icon={r.icon} color={r.color} main={r.main} desc={r.desc} />
                )
            })}
        </div>
    )
}

export default WhyList