import { BiHomeAlt2 } from "react-icons/bi";
import { LuListTodo, LuNotebookText, LuLayoutDashboard, LuBell, LuSettings  } from "react-icons/lu";
import { RiBloggerLine, RiDeleteBinLine, RiSearch2Line } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import { IoWalletOutline, IoCalendarOutline, IoFilter } from "react-icons/io5";
import { MdLockOutline, MdOutlineLockOpen, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoMdMore, IoIosArrowDown, IoIosArrowForward   } from "react-icons/io";
import { GoPerson, GoHeart, GoHeartFill } from "react-icons/go";
import { FcTimeline } from "react-icons/fc";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
// import { FiPlus } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { GoDot } from "react-icons/go";
import { MdOutlinePending } from "react-icons/md";
import { TbProgressCheck } from "react-icons/tb";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { HiOutlineQueueList } from "react-icons/hi2";
import { FaRegFlag } from "react-icons/fa";

const IconList = {
    home: BiHomeAlt2,
    todo: LuListTodo,
    note: LuNotebookText,
    blog: RiBloggerLine,
    wallet: IoWalletOutline,
    dashboard: LuLayoutDashboard,
    lock: MdLockOutline,
    unlock: MdOutlineLockOpen,
    calendar: IoCalendarOutline,
    notification: LuBell,
    more: IoMdMore,
    menuleft: CgMenuLeft,
    arrowdown: IoIosArrowDown,
    arrowforward: IoIosArrowForward,
    profile: GoPerson,
    delete: RiDeleteBinLine,
    timeline: FcTimeline,
    settings: LuSettings,
    darkmode: MdOutlineDarkMode,
    lightmode: MdOutlineLightMode,
    check: FaCheck,
    search: RiSearch2Line,
    filter: IoFilter,
    close: IoCloseOutline,
    plus: FaPlus,
    edit: FiEdit2,
    heart: GoHeart,
    heartfill: GoHeartFill,
    like: SlLike,
    comment: FaRegComment,
    share: PiShareFat,
    dot: GoDot,
    pending: MdOutlinePending,
    progress: TbProgressCheck,
    done: MdOutlineCheckCircleOutline,
    people: GoPeople,
    all: HiOutlineQueueList,
    flag: FaRegFlag,

};

type IconName = keyof typeof IconList;

export { IconList };
export type { IconName };
