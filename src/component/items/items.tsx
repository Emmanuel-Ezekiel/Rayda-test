import "../../styles/items.scss";
import Avatar from "@mui/material/Avatar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  data: any;
  loading: boolean;
}

const Items = ({ data, loading }: Props) => {
  //Used Material UI to the User Avatar Name
  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: "#F2F4F7",
        width: "32px",
        height: "32px",
        color: " #475467",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "20px",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return (
    <div className="items-container">
      <div className="item-header">
        <div className="content">
          <h2>Featured Items</h2>
          <button>View Auction</button>
        </div>

        <div className="line"></div>
      </div>

      <div className="cards">
        <div className="row">
          {data?.map((items: any) => (
            <div className="row-container">
              {loading ? (
                <>
                  <div className="img">
                    <Skeleton width={100} height={20} />
                  </div>

                  <div className="detail">
                    <div className="name">
                      <Skeleton width={100} height={20} />
                    </div>
                    <div className="item-details">
                      <Skeleton width={100} height={20} />
                    </div>
                    <div className="price">
                      <Skeleton width={100} height={20} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="img">
                    <img src={items.icon} alt="img" />
                  </div>

                  <div className="detail">
                    <div className="name">
                      <Avatar {...stringAvatar(items.name)} />
                      <h2>
                        {items.name} <span>(Highest Bidder)</span>
                      </h2>
                    </div>
                    <div className="item-details">
                      <p>{items.title}</p>
                    </div>
                    <div className="price">
                      <p>
                        Current Bid: <span>{items.bid}</span>
                      </p>
                    </div>
                  </div>
                </>
              )}

              <button>Add to wishlist</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
