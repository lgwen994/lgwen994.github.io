// components/SocialMediaLinks/SocialMediaLinks.tsx
import { BoxOffers } from "@modules/BoxOffers";
export const SocialMediaLinks = () => {
    return (
        <BoxOffers
            boxes={[
                {
                    asLink: true,
                    href: "https://www.facebook.com/share/18WdPVtM99/?mibextid=qi2Omg",
                    iconName: "facebookC",
                    content: `
                        <h3>Facebook</h3>
                    `,
                },
                {
                    asLink: true,
                    href: "https://www.linkedin.com/in/annie-qian-21353635b/",
                    iconName: "linkedinC",
                    content: `
                        <h3>Linkedin</h3>
                    `,
                },
                {
                    asLink: true,
                    href: "https://www.xiaohongshu.com/user/profile/5ad0abd64eacab0f494b71e3?xsec_token=YB_HYwzrPyFTnR_AIYa-azqzB3z2ucVrXJerD1i1qv-I0%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=5ad0abd64eacab0f494b71e3&apptime=1748313279&share_id=3ee5e0fe228b46f9abbef0a1d404c807&share_channel=copy_link",
                    iconName: "xiaohongshuEn",
                    content: `
                        <h3>Rednote 小红书</h3>
                    `,
                },
            ]}
        />
    );
};