import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image
                src={"/dachshund.png"}
                alt="dachshund-logo"
                width={100}
                height={100}
            />
        </Link>
    );
}

export default Logo;