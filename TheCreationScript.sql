USE [master]
GO
/****** Object:  Database [TheCreation]    Script Date: 2022/4/30 12:51:49 ******/
CREATE DATABASE [TheCreation]
 
GO
ALTER DATABASE [TheCreation] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TheCreation] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TheCreation] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TheCreation] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TheCreation] SET ARITHABORT OFF 
GO
ALTER DATABASE [TheCreation] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [TheCreation] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TheCreation] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TheCreation] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TheCreation] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TheCreation] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TheCreation] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TheCreation] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TheCreation] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TheCreation] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TheCreation] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TheCreation] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TheCreation] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TheCreation] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TheCreation] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TheCreation] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TheCreation] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TheCreation] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [TheCreation] SET  MULTI_USER 
GO
ALTER DATABASE [TheCreation] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TheCreation] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TheCreation] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TheCreation] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
EXEC sys.sp_db_vardecimal_storage_format N'TheCreation', N'ON'
GO
USE [TheCreation]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[AdminId] [varchar](10) NOT NULL,
	[AdminName] [varchar](20) NOT NULL,
	[Sex] [varchar](6) NULL,
	[BirthDay] [datetime] NULL,
	[EntryTime] [datetime] NOT NULL,
	[AdminType] [char](10) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[AdminId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Applys]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Applys](
	[ApplysId] [bigint] IDENTITY(1,1) NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[ApplysDescrib] [text] NOT NULL,
	[ApplysDate] [datetime] NOT NULL,
	[ApplysState] [char](20) NOT NULL,
	[DealerId] [varchar](10) NULL,
 CONSTRAINT [PK__Applys__D7CEBD9A715C3EBD] PRIMARY KEY CLUSTERED 
(
	[ApplysId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AuthenApply]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AuthenApply](
	[AuthenId] [bigint] IDENTITY(1,1) NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[CreateType] [varchar](20) NOT NULL,
	[PriceRange] [varchar](20) NOT NULL,
	[AuthenApplyState] [varchar](10) NOT NULL,
	[Describe] [text] NULL,
	[DealerId] [varchar](10) NULL,
 CONSTRAINT [PK__AuthenAp__95A5FB9DF19ED242] PRIMARY KEY CLUSTERED 
(
	[AuthenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Blog]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Blog](
	[BlogID] [bigint] IDENTITY(1,1) NOT NULL,
	[PublisherID] [varchar](10) NOT NULL,
	[BlogType] [varchar](50) NOT NULL,
	[PublishDate] [datetime] NOT NULL,
	[Title] [varchar](70) NOT NULL,
	[BlogContent] [text] NOT NULL,
	[CoverImg] [varchar](200) NOT NULL,
	[Describe] [varchar](200) NOT NULL,
	[ViewCount] [bigint] NOT NULL,
	[Address] [varchar](50) NOT NULL,
 CONSTRAINT [PK__Blog__54379E50A3558E2B] PRIMARY KEY CLUSTERED 
(
	[BlogID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BlogComment]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BlogComment](
	[CommentID] [bigint] IDENTITY(1,1) NOT NULL,
	[CommenterID] [varchar](10) NOT NULL,
	[BlogID] [bigint] NOT NULL,
	[Content] [varchar](220) NOT NULL,
	[CommentDate] [datetime] NOT NULL,
 CONSTRAINT [PK__BlogComm__C3B4DFAA0EC0DCD6] PRIMARY KEY CLUSTERED 
(
	[CommentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Collect]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Collect](
	[CollectId] [bigint] IDENTITY(1,1) NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[ProductionId] [bigint] NOT NULL,
 CONSTRAINT [PK__Collect__8AAA9E0AC3E0FF4C] PRIMARY KEY CLUSTERED 
(
	[CollectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comments]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comments](
	[CommentId] [bigint] IDENTITY(1,1) NOT NULL,
	[CommentDate] [datetime] NOT NULL,
	[CommentContent] [varchar](max) NULL,
	[CommenterId] [varchar](10) NOT NULL,
	[ProductionId] [bigint] NOT NULL,
 CONSTRAINT [PK__Comments__C3B4DFCA45ADAED7] PRIMARY KEY CLUSTERED 
(
	[CommentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Creator]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Creator](
	[CreatorId] [varchar](10) NOT NULL,
	[CertificationDate] [datetime] NOT NULL,
	[CreateType] [varchar](20) NOT NULL,
	[CreatorCredit] [int] NOT NULL,
	[State] [char](4) NOT NULL,
	[CreatorLevel] [int] NOT NULL,
	[FinishedCount] [int] NOT NULL,
	[GoodRate] [decimal](5, 2) NULL,
	[EfctCmpltCnt] [int] NOT NULL,
	[PriceRange] [varchar](20) NOT NULL,
 CONSTRAINT [PK__Creator__6C75483198778A71] PRIMARY KEY CLUSTERED 
(
	[CreatorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Evaluate]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Evaluate](
	[EvaluateId] [bigint] IDENTITY(1,1) NOT NULL,
	[OrderId] [int] NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[Content] [text] NOT NULL,
	[EvaluateDate] [datetime] NOT NULL,
 CONSTRAINT [PK__Evaluate__2092E4BA7B6F6BE1] PRIMARY KEY CLUSTERED 
(
	[EvaluateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EveryImg]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EveryImg](
	[ImgId] [bigint] IDENTITY(1,1) NOT NULL,
	[UploadDate] [datetime] NULL,
	[ImgUrl] [varchar](160) NOT NULL,
	[AdminID] [varchar](10) NOT NULL,
 CONSTRAINT [PK__EveryImg__352F54F369427A65] PRIMARY KEY CLUSTERED 
(
	[ImgId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Focus]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Focus](
	[FocusId] [bigint] IDENTITY(1,1) NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[FocusedUserId] [varchar](10) NOT NULL,
 CONSTRAINT [PK__Focus__89132D3BDB1EBEA6] PRIMARY KEY CLUSTERED 
(
	[FocusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[likeIt]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[likeIt](
	[LikeId] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductionId] [bigint] NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[LikeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderApply]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderApply](
	[ApplyId] [bigint] IDENTITY(1,1) NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[QOrderId] [int] NOT NULL,
	[ApplyDescrib] [text] NOT NULL,
	[ApplyDate] [datetime] NOT NULL,
	[ApplyState] [char](20) NOT NULL,
 CONSTRAINT [PK__OrderApp__F0687FB129234684] PRIMARY KEY CLUSTERED 
(
	[ApplyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderId] [int] IDENTITY(1,1) NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[CreatorId] [varchar](10) NOT NULL,
	[total_amt] [numeric](9, 2) NOT NULL,
	[BuyDate] [datetime] NOT NULL,
	[FinishDate] [datetime] NOT NULL,
	[OrderState] [char](10) NULL,
	[NeedDescrib] [text] NULL,
	[Name] [varchar](100) NULL,
	[ActualFinishDate] [datetime] NULL,
 CONSTRAINT [PK__Orders__C3905BCF7E496161] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonMsg]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonMsg](
	[PMId] [int] IDENTITY(1,1) NOT NULL,
	[MsgDate] [datetime] NOT NULL,
	[SebderID] [varchar](10) NOT NULL,
	[ReceptID] [varchar](10) NOT NULL,
	[MsgContent] [text] NULL,
 CONSTRAINT [PK__PearsonM__5C86FF465E86C30F] PRIMARY KEY CLUSTERED 
(
	[PMId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Production]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Production](
	[ProductionId] [bigint] IDENTITY(1,1) NOT NULL,
	[PublisherNo] [varchar](10) NOT NULL,
	[ProductionName] [varchar](100) NOT NULL,
	[PublishDate] [datetime] NOT NULL,
	[ProductionContent] [text] NULL,
	[ProductionType] [varchar](10) NOT NULL,
	[ViewCount] [bigint] NOT NULL,
	[LikeCount] [int] NOT NULL,
	[CommentCount] [int] NOT NULL,
	[Tag] [varchar](20) NULL,
	[ImgUrl] [varchar](160) NULL,
	[HotCount] [int] NOT NULL,
	[Describe] [varchar](200) NULL,
 CONSTRAINT [PK__Producti__D5D9A2D557338814] PRIMARY KEY CLUSTERED 
(
	[ProductionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PublicMsg]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PublicMsg](
	[PublicMsgId] [bigint] IDENTITY(1,1) NOT NULL,
	[SenderId] [varchar](10) NOT NULL,
	[PublicMsgContent] [text] NOT NULL,
	[SendTime] [datetime] NOT NULL,
	[EndTime] [datetime] NULL,
 CONSTRAINT [PK__PublicMs__4BBE9A68C3EA0B71] PRIMARY KEY CLUSTERED 
(
	[PublicMsgId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RcptAddress]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RcptAddress](
	[AddID] [bigint] IDENTITY(1,1) NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[RcptName] [varchar](30) NOT NULL,
	[AddDetail] [varchar](50) NOT NULL,
	[Phone] [varchar](20) NULL,
	[IsDefault] [int] NOT NULL,
 CONSTRAINT [PK__RcptAddr__A0E1ADEE278B4721] PRIMARY KEY CLUSTERED 
(
	[AddID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reply]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reply](
	[ReplyId] [bigint] IDENTITY(1,1) NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[CommentId] [bigint] NOT NULL,
	[ReplyDate] [datetime] NOT NULL,
	[ReplyContent] [text] NOT NULL,
 CONSTRAINT [PK__Reply__C25E460908146B20] PRIMARY KEY CLUSTERED 
(
	[ReplyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShopCart]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopCart](
	[CartID] [bigint] IDENTITY(1,1) NOT NULL,
	[SubID] [bigint] NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[AddCount] [int] NOT NULL,
 CONSTRAINT [PK__ShopCart__51BCD79781B975F9] PRIMARY KEY CLUSTERED 
(
	[CartID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShopEvaluate]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopEvaluate](
	[EvaluateID] [bigint] IDENTITY(1,1) NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[OrderID] [bigint] NOT NULL,
	[Content] [varchar](80) NOT NULL,
	[EvaDate] [datetime] NOT NULL,
	[EvaImg1] [varchar](80) NULL,
	[EvaImg2] [varchar](80) NULL,
	[EvaImg3] [varchar](80) NULL,
	[EvaImg4] [varchar](80) NULL,
	[EvaImg5] [varchar](80) NULL,
 CONSTRAINT [PK__ShopEval__2092E4DAEA82F3BD] PRIMARY KEY CLUSTERED 
(
	[EvaluateID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShopInfoMore]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopInfoMore](
	[IMID] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductID] [bigint] NOT NULL,
	[Imgurl1] [varchar](80) NULL,
	[Imgurl2] [varchar](80) NULL,
	[Imgurl3] [varchar](80) NULL,
	[Imgurl4] [varchar](80) NULL,
	[Imgurl5] [varchar](80) NULL,
	[Imgurl6] [varchar](80) NULL,
	[Imgurl7] [varchar](80) NULL,
 CONSTRAINT [PK__ShopInfo__8DF350426AF325E1] PRIMARY KEY CLUSTERED 
(
	[IMID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShopOrder]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopOrder](
	[OrderID] [bigint] IDENTITY(1,1) NOT NULL,
	[UsersId] [varchar](10) NOT NULL,
	[AddID] [bigint] NOT NULL,
	[BuyDate] [datetime] NOT NULL,
	[BuyState] [varchar](20) NOT NULL,
	[TotAmt] [decimal](15, 3) NOT NULL,
	[PayMethod] [varchar](20) NULL,
	[SendBy] [varchar](20) NULL,
 CONSTRAINT [PK__ShopOrde__C3905BAF86F94ADC] PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShopOrderDetail]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopOrderDetail](
	[ODetailID] [bigint] IDENTITY(1,1) NOT NULL,
	[OrderID] [bigint] NOT NULL,
	[BuyCount] [int] NOT NULL,
	[BuyPrice] [decimal](10, 3) NOT NULL,
	[SubID] [bigint] NOT NULL,
 CONSTRAINT [PK__ShopOrde__AF3B5BAD88116127] PRIMARY KEY CLUSTERED 
(
	[ODetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShopProduct]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopProduct](
	[ProductID] [bigint] IDENTITY(1,1) NOT NULL,
	[PName] [varchar](40) NOT NULL,
	[TypeID] [int] NOT NULL,
	[TagId] [int] NOT NULL,
	[Describe] [varchar](80) NULL,
	[ImgUrl] [varchar](80) NULL,
	[Price] [decimal](10, 3) NOT NULL,
	[LeftCount] [bigint] NOT NULL,
 CONSTRAINT [PK__ShopProd__B40CC6ED0D164A45] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShopProductTag]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopProductTag](
	[TagId] [int] IDENTITY(1,1) NOT NULL,
	[TagName] [varchar](20) NOT NULL,
 CONSTRAINT [PK__ShopProd__657CF9ACD19560A2] PRIMARY KEY CLUSTERED 
(
	[TagId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShopProductType]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopProductType](
	[TypeID] [int] IDENTITY(1,1) NOT NULL,
	[TypeName] [varchar](20) NOT NULL,
 CONSTRAINT [PK__ShopProd__516F0395191E7016] PRIMARY KEY CLUSTERED 
(
	[TypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SProductSubClass]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SProductSubClass](
	[SubID] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductID] [bigint] NOT NULL,
	[PStyleDescribe] [varchar](80) NULL,
	[LeftCount] [bigint] NOT NULL,
	[MiniImg] [varchar](80) NULL,
	[Price] [decimal](10, 3) NOT NULL,
 CONSTRAINT [PK__SProduct__4D9BB86A853A67C9] PRIMARY KEY CLUSTERED 
(
	[SubID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SysMsg]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SysMsg](
	[SysMsgId] [bigint] IDENTITY(1,1) NOT NULL,
	[SenderId] [varchar](10) NOT NULL,
	[ReceptId] [varchar](10) NOT NULL,
	[SysMsgContent] [text] NOT NULL,
	[SendTime] [datetime] NOT NULL,
 CONSTRAINT [PK__SysMsg__05650A3F7158F094] PRIMARY KEY CLUSTERED 
(
	[SysMsgId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tag]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tag](
	[LabelId] [int] IDENTITY(1,1) NOT NULL,
	[LabelName] [varchar](20) NOT NULL,
	[LabelType] [char](10) NOT NULL,
	[LabelImg] [varchar](80) NULL,
 CONSTRAINT [PK__Tag__397E2BC3E564ED41] PRIMARY KEY CLUSTERED 
(
	[LabelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UsersId] [varchar](10) NOT NULL,
	[UsersName] [varchar](20) NULL,
	[Sex] [char](2) NULL,
	[Birth] [datetime] NULL,
	[UsersLevel] [int] NOT NULL,
	[Credit] [int] NOT NULL,
	[State] [char](6) NOT NULL,
	[OrderCount] [int] NOT NULL,
	[ChargebackCount] [int] NOT NULL,
	[Hobby] [varchar](20) NULL,
	[CreatorId] [varchar](10) NULL,
	[HeadUrl] [nvarchar](100) NOT NULL,
	[Exp] [int] NOT NULL,
	[RegisteDate] [datetime] NULL,
 CONSTRAINT [PK__Users__A349B06252213D63] PRIMARY KEY CLUSTERED 
(
	[UsersId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UsersLevel]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsersLevel](
	[UsersLevel] [int] NOT NULL,
	[LowExp] [bigint] NOT NULL,
	[HighExp] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UsersLevel] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UsersLogin]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsersLogin](
	[UsersId] [varchar](10) NOT NULL,
	[Pwd] [varchar](20) NOT NULL,
	[Tel] [varchar](20) NULL,
	[Email] [varchar](30) NULL,
 CONSTRAINT [PK__UsersLog__A349B062400459E0] PRIMARY KEY CLUSTERED 
(
	[UsersId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vote]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vote](
	[VoteId] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](30) NOT NULL,
	[Content] [varchar](100) NULL,
	[BeginDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[ImgUrl] [varchar](100) NULL,
	[AdminID] [varchar](10) NOT NULL,
	[ReferenceType] [varchar](20) NULL,
 CONSTRAINT [PK__Vote__52F015C249C62F1C] PRIMARY KEY CLUSTERED 
(
	[VoteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Voted]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Voted](
	[VotedId] [bigint] IDENTITY(1,1) NOT NULL,
	[Detail] [varchar](100) NULL,
	[ImgUrl] [varchar](100) NULL,
	[ReferenceId] [varchar](20) NULL,
	[VoteId] [bigint] NOT NULL,
 CONSTRAINT [PK__Voted__7EDD6FAB90938A8C] PRIMARY KEY CLUSTERED 
(
	[VotedId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VoteDetail]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VoteDetail](
	[VoteId] [bigint] NOT NULL,
	[VotedId] [bigint] NOT NULL,
	[VoteTime] [datetime] NOT NULL,
	[VoterId] [varchar](10) NOT NULL,
 CONSTRAINT [VDKey] PRIMARY KEY CLUSTERED 
(
	[VoteId] ASC,
	[VotedId] ASC,
	[VoteTime] ASC,
	[VoterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[Creator_Nmae]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--创建视图，便于UnEvalue视图从中获取创作者名
create view [dbo].[Creator_Nmae]
as
select a.CreatorId,a.CreateType ,b.UsersName
from Creator a,Users b
where a.CreatorId=b.CreatorId and b.CreatorId is not null

GO
/****** Object:  View [dbo].[UnEvaluate]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[UnEvaluate]
as
select a.UsersName,b.*,c.UsersName CreatorName,c.CreateType
from Users a,Orders b,Creator_Nmae c
where a.UsersId=b.UsersId and b.CreatorId=c.CreatorId
and b.OrderState='完美交付'
and b.OrderId not in (
 select OrderId
 from Evaluate
)

GO
/****** Object:  View [dbo].[All_Users_Fans_View]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--26.创建视图统计用户的所有作品的总粉丝数
create view [dbo].[All_Users_Fans_View]
as
select sum(FocusId) tot_focus_count ,Users.UsersId
from Users left join Focus on Users.UsersId=Focus.FocusedUserId
group by Users.UsersId

GO
/****** Object:  View [dbo].[All_Works_Comment_View]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--25.创建视图统计用户的所有作品的总评论数
create view [dbo].[All_Works_Comment_View]
as
select sum(CommentId) tot_comment_count ,Users.UsersId
from Users left join Production on Users.UsersId=Production.PublisherNo
    left join  Comments on Production.ProductionId=CommentId
group by Users.UsersId

GO
/****** Object:  View [dbo].[All_Works_Hot_View]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[All_Works_Hot_View]
as
select sum(HotCount) tot_hot,a.UsersId
from Users a left join Production b on a.UsersId=b.PublisherNo
group by a.UsersId

GO
/****** Object:  View [dbo].[Creator_Evaluate]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[Creator_Evaluate]
as
select a.Content,EvaluateDate,b.CreatorId,b.CreateType,d.HeadUrl,d.UsersName
from Evaluate a,Creator b,Orders c,Users d
where a.OrderId=c.OrderId and c.CreatorId=b.CreatorId and a.UsersId=d.UsersId

GO
/****** Object:  View [dbo].[Creator_Type]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[Creator_Type]
as
select distinct CreateType
from Creator

GO
/****** Object:  View [dbo].[Hot_Good_Works]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[Hot_Good_Works]
AS
SELECT  TOP (3) dbo.Users.UsersId, dbo.Users.UsersName, dbo.Users.Sex, dbo.Users.Birth, dbo.Users.UsersLevel, 
                   dbo.Users.Credit, dbo.Users.State, dbo.Users.OrderCount, dbo.Users.ChargebackCount, dbo.Users.Hobby, 
                   dbo.Users.CreatorId, dbo.Users.HeadUrl, dbo.Users.Exp AS ProductionId, dbo.Production.ProductionId AS PublisherNo, 
                   dbo.Production.PublisherNo AS ProductionName, dbo.Production.ProductionName AS PublishDate, 
                   dbo.Production.PublishDate AS ProductionContent, dbo.Production.ProductionContent AS ProductionType, 
                   dbo.Production.ProductionType AS ViewCount, dbo.Production.ViewCount AS LikeCount, 
                   dbo.Production.LikeCount AS CommentCount, dbo.Production.CommentCount AS Tag1, dbo.Production.Tag AS Tag2, 
                   dbo.Production.ImgUrl AS Tag3, dbo.Production.HotCount AS ImgUrl1
FROM      dbo.Users INNER JOIN
                   dbo.Production ON dbo.Users.UsersId = dbo.Production.PublisherNo

GO
/****** Object:  View [dbo].[most_comment_creator]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--创建视图，筛选评论数前四的创作者
create view [dbo].[most_comment_creator]
as
select top 4 b.UsersName,a.CreateType,a.CertificationDate,b.HeadUrl,b.UsersId,COUNT(*) comt_count
from Creator a,Users b,Comments c
where a.CreatorId=b.UsersId and c.CommenterId=b.UsersId
group by b.UsersId,b.UsersName,a.CreateType,a.CertificationDate,b.HeadUrl
order by COUNT(*) desc

GO
/****** Object:  View [dbo].[Most_Evaluate_Creator_View]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--21.创建视图，筛选好评(评价)数最高的前四个创作者
create view [dbo].[Most_Evaluate_Creator_View]
as
select Top 4 c.CreatorId,c.CertificationDate,c.CreateType,d.UsersName
from Evaluate a,Orders b, Creator c,Users d
where a.OrderId=b.OrderId and b.CreatorId=c.CreatorId  and d.UsersId=c.CreatorId
group by c.CreatorId,c.CertificationDate,c.CreateType,d.UsersName
order by count(*)

GO
/****** Object:  View [dbo].[Music_Works_Hot]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--筛选音乐类型热度最高图片
create view [dbo].[Music_Works_Hot]
as
select top 1 *
from Production
where ProductionType='音乐'
order by HotCount desc

GO
/****** Object:  View [dbo].[newest_comment]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[newest_comment]
as
select top 6 b.HeadUrl,a.ProductionId,b.UsersId,b.UsersName,a.CommentContent
from Comments a, Users b
where a.CommenterId=b.UsersId
order by CommentDate desc

GO
/****** Object:  View [dbo].[newst_creator_production]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--7.创建视图，查找最新创作者的最新五个作品
create view [dbo].[newst_creator_production]
as
select Top 5*
from Production
where PublisherNo = (select Top 1 CreatorId from Creator order by CertificationDate desc)

GO
/****** Object:  View [dbo].[P_Type]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[P_Type]
as
select Production.ProductionType
from Production
group by ProductionType

GO
/****** Object:  View [dbo].[Picture_Works_Hot]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--筛选图片类型热度最高图片
create view [dbo].[Picture_Works_Hot]
as
select top 1 *
from Production
where ProductionType='图片'
order by HotCount desc

GO
/****** Object:  View [dbo].[Relevant_Type]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--用于查找每个用户的所有发布的作品的作品标签
create view [dbo].[Relevant_Type]
as
select Tag,UsersId
from Production a,Users b
where a.PublisherNo=b.UsersId

GO
/****** Object:  View [dbo].[Tag_Hot]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[Tag_Hot]
as
select Top 5 a.LabelName,a.LabelId,a.LabelImg,sum(HotCount) tot_hot
from Tag a,Production b
where b.Tag=a.LabelName
group by a.LabelId,a.LabelName,a.LabelImg

GO
/****** Object:  View [dbo].[Text_Works_Hot]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--筛选文字类型热度最高图片
create view [dbo].[Text_Works_Hot]
as
select top 1 *
from Production
where ProductionType='文字'
order by HotCount desc

GO
/****** Object:  View [dbo].[Tot_Comment]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--18.创建视图找每个用户的所有作品总评论
create view [dbo].[Tot_Comment]
as
select  Users.UsersId,sum(CommentCount) tot_comment
from Users left join Production  on Users.UsersId=Production.PublisherNo 
group by Users.UsersId

GO
/****** Object:  View [dbo].[Tot_Fans]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[Tot_Fans]
as
select  Users.UsersId,count(Focus.FocusId) tot_fans
from Users left join Focus  on Users.UsersId=Focus.FocusedUserId 
group by Users.UsersId

GO
/****** Object:  View [dbo].[tot_hot_users]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[tot_hot_users]
as
select top 4 a.Sex,a.UsersName,a.Birth,a.HeadUrl,a.UsersId,sum(HotCount) tot_hot
from Users a,Production b
where a.UsersId=b.PublisherNo
group by a.UsersId,a.Sex,a.Birth,a.HeadUrl,a.UsersName
order by sum(HotCount) desc

GO
/****** Object:  View [dbo].[Tot_Like]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--创建视图找每个用户的所有作品总点赞数
create view [dbo].[Tot_Like]
as
select  Users.UsersId,sum(Production.LikeCount) tot_like
from Users left join Production  on Users.UsersId=Production.PublisherNo 
group by Users.UsersId

GO
/****** Object:  View [dbo].[Tot_Works]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[Tot_Works]
as
select  UsersId,count(ProductionId) tot_works
from Users left join Production  on UsersId=PublisherNo
group by UsersId

GO
/****** Object:  View [dbo].[Users_Level_View]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--23.创建视图，显示用户及对应最新等级
create view [dbo].[Users_Level_View]
as
select a.UsersName,a.Exp,b.*
from Users a,UsersLevel b
where a.Exp between b.LowExp and b.HighExp

GO
/****** Object:  View [dbo].[Video_Works_Hot]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--筛选视频类型热度最高图片
create view [dbo].[Video_Works_Hot]
as
select top 1 *
from Production
where ProductionType='视频'
order by HotCount desc

GO
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000000', N'系统机器人管理员', N'男', NULL, CAST(N'2020-12-18T09:29:32.987' AS DateTime), N'普通管理员')
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000001', N'lisa', N'女', CAST(N'2000-01-01T00:00:00.000' AS DateTime), CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'业务管理员')
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000002', N'lily', N'女', NULL, CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'高级管理员')
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000003', N'王思', N'女', NULL, CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'业务管理员')
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000004', N'李梦', N'女', NULL, CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'高级管理员')
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000005', N'周婷', N'女', NULL, CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'业务管理员')
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000006', N'马尔', N'男', NULL, CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'业务管理员')
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000007', N'付杰', N'男', NULL, CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'高级管理员')
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000008', N'山熊', N'男', NULL, CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'业务管理员')
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000009', N'里皮', N'男', NULL, CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'普通管理员')
INSERT [dbo].[Admin] ([AdminId], [AdminName], [Sex], [BirthDay], [EntryTime], [AdminType]) VALUES (N'000000010', N'carry', N'男', NULL, CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'普通管理员')
SET IDENTITY_INSERT [dbo].[Applys] ON 

INSERT [dbo].[Applys] ([ApplysId], [UsersId], [ApplysDescrib], [ApplysDate], [ApplysState], [DealerId]) VALUES (1, N'10240002', N'??妈耶求求你了', CAST(N'2021-01-02T20:35:44.007' AS DateTime), N'待审核              ', N'')
INSERT [dbo].[Applys] ([ApplysId], [UsersId], [ApplysDescrib], [ApplysDate], [ApplysState], [DealerId]) VALUES (4, N'10240002', N'水水水水', CAST(N'2021-05-18T00:00:00.000' AS DateTime), N'待审核              ', N'')
INSERT [dbo].[Applys] ([ApplysId], [UsersId], [ApplysDescrib], [ApplysDate], [ApplysState], [DealerId]) VALUES (5, N'10240002', N'测试哦', CAST(N'2021-05-24T17:53:57.860' AS DateTime), N'待审核              ', N'')
INSERT [dbo].[Applys] ([ApplysId], [UsersId], [ApplysDescrib], [ApplysDate], [ApplysState], [DealerId]) VALUES (11, N'10240005', N'我就看看啦！', CAST(N'2021-06-02T16:01:35.963' AS DateTime), N'待审核              ', N'')
INSERT [dbo].[Applys] ([ApplysId], [UsersId], [ApplysDescrib], [ApplysDate], [ApplysState], [DealerId]) VALUES (12, N'10240011', N'快上线把你！', CAST(N'2021-06-02T16:02:07.230' AS DateTime), N'待审核              ', N'')
INSERT [dbo].[Applys] ([ApplysId], [UsersId], [ApplysDescrib], [ApplysDate], [ApplysState], [DealerId]) VALUES (16, N'10240003', N'abababa', CAST(N'2021-06-25T10:29:08.920' AS DateTime), N'待审核              ', NULL)
INSERT [dbo].[Applys] ([ApplysId], [UsersId], [ApplysDescrib], [ApplysDate], [ApplysState], [DealerId]) VALUES (17, N'10240003', N'qwwq', CAST(N'2021-06-25T11:13:35.987' AS DateTime), N'待审核              ', NULL)
SET IDENTITY_INSERT [dbo].[Applys] OFF
SET IDENTITY_INSERT [dbo].[AuthenApply] ON 

INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (1, N'10240001', N'音乐', N'200-500', N'已通过', N'???我还需要理由？', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (2, N'10240002', N'文字', N'100-200', N'已通过', N'不和我意', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (4, N'10240003', N'视频', N'120-130', N'已驳回', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (5, N'10240004', N'图片', N'100-200', N'已驳回', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (6, N'10240005', N'音乐', N'100-200', N'已通过', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (7, N'10240006', N'文字', N'100-200', N'已驳回', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (8, N'10240007', N'视频', N'100-200', N'已通过', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (9, N'10240008', N'图片', N'100-200', N'已通过', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (10, N'10240009', N'音乐', N'100-200', N'已通过', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (12, N'10240010', N'文字', N'100-200', N'已通过', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (14, N'10240011', N'视频', N'100-200', N'已通过', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (15, N'10240012', N'图片', N'100-200', N'已通过', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (16, N'10240013', N'音乐', N'100-200', N'已通过', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (17, N'10240014', N'文字', N'100-200', N'已通过', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (18, N'10240015', N'视频', N'100-200', N'已通过', N'不喜欢', N'000000000')
INSERT [dbo].[AuthenApply] ([AuthenId], [UsersId], [CreateType], [PriceRange], [AuthenApplyState], [Describe], [DealerId]) VALUES (19, N'10240002', N'文字', N'100-200', N'已驳回', N'啊是大飒飒', N'000000000')
SET IDENTITY_INSERT [dbo].[AuthenApply] OFF
SET IDENTITY_INSERT [dbo].[Blog] ON 

INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (2, N'10240005', N'资源分享', CAST(N'2021-06-18T19:58:24.150' AS DateTime), N'如何让自己的网站更有质量？AB模板王有妙招', N'<p><img src="/image/BlogContent_Img/20210618/6375964306856239542082209.jpg" title="1-1FFQ93934U8.jpg" alt="1-1FFQ93934U8.jpg" width="617" height="362"/></p><p>
	<br/>
	　　随着互联网的不断发展，对网站的要求越来越高，如何提高网站的质量，让自己在这个竞争激烈的市场中站稳自己的脚步呢?今天，AB模板王汇总了一些方式，希望对大家有帮助。</p><p>
	&nbsp;</p><p>
	　　第一、建设网站前的市场分析</p><p>
	　　AB模板王告诉大家，在建设网站之前，要好好分析一下相关行业的市场是怎样的，然后结合自身的条件分析，给网站制定一个合理的规划。</p><p>
	&nbsp;</p><p>
	　　第二、选择一个独立稳定的服务器</p><p>
	　　有的站长为了节约成本，使用了一个低廉的服务器，殊不知这样的服务器极不稳定，会导致用户迟迟打不开网页，他们是没有时间慢慢等待的，只会快速离开网站，增加网站的跳出率。</p><p>
	&nbsp;</p><p>
	　　网站在刚刚建立的时候，就要到正规公司购买一个独立稳定的服务器，保证网站的正常运营速度，才会受到用户的亲睐。</p><p>
	&nbsp;</p><p>
	　　第三、网页设计要简单明了</p><p>
	　　有的站长为了吸引用户的眼球，把网站设计得花枝招展，其实这样犯了一个严重的错误，用户进入网站之后感到眼花缭乱，很难找到自己需要的东西，他们只会立刻关闭网站，网站的跳出率会随之增多。</p><p>
	&nbsp;</p><p>
	　　网站的结构尽量简洁一些，做到层次分明、中心明确、色调搭配合理等等，给用户舒服的感觉，才能留住更多的有效客户。</p><p>
	&nbsp;</p><p>
	　　第四、网站内容的规划</p><p>
	　　大家都知道“内容为王”，网站的内容是重中之重，AB模板王建议，可以从一些报纸杂志、多媒体或是生活中寻找素材，既要使文章有价值，又要能吸引用户的眼球，做好了这一点，网站的流量才会越来越多。</p><p>
	&nbsp;</p><p>
	　　切记，千万不要去采集别人的文章，这样的文章重复度太高，没有什么价值，对网站没有任何帮助，还会让搜索引擎觉得你的网站是一个垃圾站，导致网站的排名降低。</p><p>
	&nbsp;</p><p>
	　　AB模板王介绍了提高网站质量的四个方法，大家要引起重视了，并不断努力，不断创新，肯定会取得显著的效果。</p><p><br/></p>', N'/Upload/VoteImg/VoteHeadImg/2021-06-18cf7ca862-3255-44a5-bbf5-b979e7e91a17.jpg', N'随着互联网的不断发展，对网站的要求越来越高，如何提高网站的质量，让自己在这个竞争激烈的市场中站稳自己的脚步呢?今天，AB模板王汇总了一些方式，希望对大家有帮助。 第一、...', 30, N'未填写')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (3, N'10240005', N'经验分享', CAST(N'2021-06-18T20:35:59.140' AS DateTime), N'网络公司告诉你有关面包屑导航的事', N'<p>
	<img alt="" src="/ueditor/net/upload/image/20210618/6375964534687108655545824.jpg" height="auto"/><img src="/image/BlogContent_Img/20210618/6375964535397733104839852.jpg" title="1-1FFQ21300519.jpg" alt="1-1FFQ21300519.jpg" width="657" height="430"/></p><p>
	<br/>
	　　面包屑导航来源于童话故事中的汉塞尔利用面包屑来记录回家的路的故事，根据这个故事我们就可以知道它是指可以让用户清楚知道在网站中所处的位置，找得到回到网站首页的路。AB模板网所建设的每一个网站都拥有面包屑导航，今天就让织梦模板网告诉你有关面包屑导航的事。</p><p>
	&nbsp;</p><p>
	　　一、体现网站分级架构，方便用户操作。</p><p>
	&nbsp;</p><p>
	　　面包屑导航能够使用户清楚看出网站的内容组织方式，提供回到各个层级的入口。特别是对于分级比较多的大型网站，可以让用户便捷的找到需要的信息，对于用户体验的提高作用是十分明显的。</p><p>
	&nbsp;</p><p>
	　　二、降低网站跳出率。</p><p>
	&nbsp;</p><p>
	　　面包屑导航在用户进入网站后可以诱使用户进行深层次的浏览，比如我在搜索引擎上看到一篇织梦模板网的文章，点击进入后我通过面包屑导航发现了其他感兴趣的内容，我就会继续浏览下去，延长网站访问时间。</p><p>
	&nbsp;</p><p>
	　　三、更加利于seo优化。</p><p>
	&nbsp;</p><p>
	　　面包屑导航不仅不占用网页空间，对网站内链的建设也十分有好处，使得蜘蛛只要顺着链接爬行就可以了，增加网站的收录，提高权重和排名，促进seo目标的实现。用户体验不高原因在网站本身，做好面包屑导航，就做好了用户体验的第一步。</p><p><br/></p>', N'/Upload/VoteImg/VoteHeadImg/2021-06-183e124011-dc78-441e-8860-dd37abd38f55.jpg', N'面包屑导航来源于童话故事中的汉塞尔利用面包屑来记录回家的路的故事，根据这个故事我们就可以知道它是指可以让用户清楚知道在网站中所处的位置，找得到回到网站首页的路。...', 26, N'未填写')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (4, N'10240005', N'干货分享', CAST(N'2021-06-18T21:14:27.880' AS DateTime), N'带着seo思维选域名 建站就成功了一半', N'<p style="text-align: center;"><img src="/image/BlogContent_Img/20210618/6375964761734770218399377.jpg" title="1-1FFQ93552317-lp.jpg" alt="1-1FFQ93552317-lp.jpg" width="525" height="317"/></p><p>
	对于网站来说，域名的选择尤为重要，有些人就不太在意这些，认为网站内容才是关键，这域名随便找个品牌拼音就成了。其实，域名的挑选还有不少名堂，织梦教程网高端网站建设中，常常会带着seo思维去选域名。</p><p>
	(1)优先考虑品牌</p><p>
	好的域名并不会把行业词放在里面，就拿百度来说，字面上看与“搜索引擎”毫无关联，可就是国内搜索领域的龙头老大。可见，品牌名称与行业名称来得更重要，有些大公司就是根据品牌词来确定域名的。</p><p>
	(2)域名的续费周期</p><p>
	其实，域名的续费周期对网站排名有一定的影响。客观来说，域名续费的周期越长，则说明站长花费在站点上的时间就越长，可见并不是一个垃圾站，可能是一个高质量网站。</p><p>
	(3)域名的后缀</p><p>
	部分域名天生就能给网站带来高权重，比如大家熟悉的.gov/.edu。当然了，只有符合条件的才可以注册这种域名。我们可以选择国际通用的，比如.net/.com/.cn等等。</p><p>
	(4)域名的出生时间</p><p>
	一个老域名比较值钱，域名注册的越早，对网站排名越有利。这就是为什么有些站长喜欢购买老域名来建站的原因。</p><p>
	(5)首次收录时间</p><p>
	有过seo优化经验的朋友们应该清楚，域名第一次被搜索引擎收录非常重要。有些老域名没有解析，搜索引擎就不会收录其中的内容。虽然无法知道搜索引擎收录域名的确切时间，但可以使用互联网档案馆来查询网站的历史内容，比较有参考价值。</p><p>
	(6)域名中包含关键词</p><p>
	对于英文站来说，通常会根据关键词来选购域名，会对谷歌排名有一定的影响。因为关键词形式的域名本身就有提升排名的效果，当有人转载文章时，无形之中就做了该关键词的锚文本。</p><p><br/></p>', N'/Upload/VoteImg/VoteHeadImg/2021-06-18b2afe053-9382-4671-8756-ef238f084d03.jpg', N'对于网站来说，域名的选择尤为重要，有些人就不太在意这些，认为网站内容才是关键，这域名随便找个品牌拼音就成了。其实，域名的挑选还有不少名堂，织梦教程网高端网站建设中...', 12, N'未填写')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (5, N'10240005', N'干货分享', CAST(N'2021-06-18T22:49:39.507' AS DateTime), N'内容优化之有“心”创作', N'<p><img src="/image/BlogContent_Img/20210618/6375965335172453375348857.jpg" title="1-1FFQ93502121.jpg" alt="1-1FFQ93502121.jpg" width="649" height="395"/></p><p>
	<br/>
	什么是真正的原创文?小编认为，真正的原创文是作者自己内心的真切感悟或体会，能够体现作者独特风格，且来源于日常生活或工作中，能给大众带来价值的文章。</p><p>
	在网站优化中，内容优化一直是重中之重。小编看过不少关于写原创文的范例，网上也有不少相关课程，那么到底如何才能创作出一篇有质量的原创文?</p><p>
	第一，以实际的工作经验为题材。</p><p>
	既然我们从事这一方面的工作，最了解这一行的就是我们自己了，肯定有很多话想表达。我们何不把实际工作经验作为写作素材呢?seo编辑认为，完全可以写写平时编辑文章的感想。这种方法不仅可以加深日常工作中的经验，还能提高自己的写作能力。</p><p>
	第二，通过交流、沟通整理成文章。</p><p>
	seo行业内经常会进行交流、沟通，或是您在访问某位seo高手时，都可以把内容整理出来，写成一篇访谈。而且，对于别人发表的看法，正好可以填补我们在这一块的缺失，这样，一篇高质量的原创文就出来了。</p><p>
	第三，对当前的热门话题进行创作。</p><p>
	如今，比特币、黄金暴跌、4G网络等热词，都具有一定的写作价值。要知道，因为这些时效性的文章都是网络比较稀缺，正好是搜索引擎喜欢的。discuz模板网认为，对于用户来说，热门、有趣的文章比较有意思，对于千篇一律的东西不会投以多少关注。</p><p>
	以上三点内容是小编写文时候的心得体会，比较具有可行性。其实，写作来源于生活，有价值的原创文当然离不开编辑的积累与学习。</p><p><br/></p>', N'/Upload/VoteImg/VoteHeadImg/2021-06-185bd0d0b9-7b27-488b-8025-caa3d496e66a.jpg', N'什么是真正的原创文?小编认为，真正的原创文是作者自己内心的真切感悟或体会，能够体现作者独特风格，且来源于日常生活或工作中，能给大众带来价值的文章。 在网站优化中，内...', 2, N'未填写')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (6, N'10240005', N'经验分享', CAST(N'2021-06-18T22:55:58.233' AS DateTime), N'怎样做一个符合w3c规范的网页', N'<p style="text-align: center;">
	<img alt="" src="/ueditor/net/upload/image/20210618/6375965372216332007045695.jpg" height="auto"/><img src="/image/BlogContent_Img/20210618/6375965375173760399709183.jpg" title="1-1FFQ20Zb11.jpg" alt="1-1FFQ20Zb11.jpg"/></p><p>
	作为网站技术开发人员而言,往往是站在自己的开发角度来实 
施网站布署(读取数据及开发的方便性等等),而不是站在网站访问者与搜索引擎角度。因此大部分的网站在浏览方面不够直观或是方便,特别是现在w3c的规范,更是在大部分的网站开发人员脑里一片空白。何况百度
 
、google、msn、yahoo等专业搜索引擎更有自己的搜索规则及判断网页等级技术,所以网站要优化,优化的目的只有一个：符合标准,符合蜘蛛爬行的标准,更重要的是符合网站访问者浏览的方便及易用性。以下文章中，AB织梦模板网主要通过三个方面来讲述有关W3C!</p><p>
	什么是W3C标准</p><p>
	W3C其实就是World Wide Web 
Consortium,全球万维网联盟的简称。W3C的主要职责就是确定未来万维网的发展方向,并且制定相关的推荐(recommendation, 
由于W3C是一个民间组织,没有约束性,因此只提供建议)。HTML4.01规范建议(HTML4.01 Specification 
Recommendation)就是由W3C所制定的。它还负责制定XML,MathML等其他网络语言规范。</p><p>
	怎样通过W3C标准的验证?</p><p>
	步骤方法如下：</p><p>
	1、图片的alt=&quot;&quot; 属性必须每张图片都加上，而且对齐属性用CSS来定义。不加不能通过XHTML 1.0的验证。</p><p>
	2、每个文档必须加上DTD声明。</p><p>
	a) !DOCTYPE html PUBLIC &quot;-//W3C//DTDXHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;</p><p>
	去掉后能通过验证，但有警告：No DOCTYPE found! Checking with default XHTML 1.0 Transitional Document Type.</p><p>
	3、RSS的XML通过时其中的域名地址必须与检测的地址一致，否则会报错。</p><p>
	4、标签的链接属性加上JAVASCRIPT事件时必须为#空链,不能为javascript:;或javascript:void(null);</p><p>
	5、同一个页面当中，同名的ID会产生冲突。所以以ID定义样式的必须改成类引用。</p><p>
	&lt;div id=&quot;a1&quot;&gt;111&lt;/div&gt;</p><p>
	&lt;div id=&quot;a1&quot;&gt;222&lt;/div&gt;</p><p>
	如果不用W3C来检测的话，在CSS设计里是允许这样做的。</p><p>
	那是程序的角度不能相同，CSS上是可以相同的!</p><p>
	之前就是相同的产生问题，后面就改成类引用了!</p><p>
	6、不可省略双引号或单引号。</p><p>
	a) 这个是指属性，标准是双引号~</p><p>
	单引号也能通过验证。</p><p>
	7、标签之间不可错位嵌套。</p><p>
	&lt;div class=&quot;CaseDetaListSS&quot;&gt;原文链接：&lt;a href=&#39;/html/cases/cases_61.html&#39;&gt;官方网站&lt;/div&gt;&lt;/a&gt;</p><p>
	这是不允许的。</p><p>
	8、所有的标签都使用小写。</p><p>
	9、FLASH的标签代码中不能含有,必须采用其它的方法实现。</p><p>
	10、所有的标签中含有的属性必须有值(官方的说法)。</p><p>
	11、标签必须配对完成,单标签必须以/关闭</p><p>
	12、JS和CSS外部引入文件必须加上类型定义。</p><p>
	13、所有的样式全部写在外部文件。用类名定义。在使用的地方引用。</p><p>
	14、页面上的一些特殊字符必须用HTML代码来标识.如“&amp;”写成“&amp;“</p><p>
	没通过W3C 标准验证的原因</p><p>
	每次修正代码后要刷新代码，使它们重新生效——一个小错误常常会引发之后整页的连串错误。因此如果操作不当，“修正错误”也可能引发更多错误。每次修正后使代码重新生效，这样就可以确保完全解决问题。</p><p>
	知道了上面这些基本的异常情况，下面discuz模板网就来看看版面设计无效的几个原因。</p><p>
	1、div 标签未关闭</p><p>
	这是版面设计失效的最常见原因之一。当我们了解到这是多少精致的版块设计失效的罪魁祸首时，总会大吃一惊。开启的div标签是最普遍的版块设计失误之一，也是最难诊断的失误之一。验证程序有时会指向错误的开启div标签，诊断时就像大海捞针一样麻烦。</p><p>
	2、麻烦的embed标签</p><p>
	九十年代早期，Microsoft和Netscape的浏览器开始能够辨认非标准的独有字体。遗憾的是这意味着W3C验证程序还不能识别某些关键HTML
 标签，如“embed”，即使这些标签已经被广泛使用。如果确实希望得到严格的DOCTYPE(文档类型)验证，就只能放弃嵌套。</p><p>
	如果同时想要生效的版面设计和嵌入式媒体，可以试试Flash Satay方法。</p><p>
	3、不当的DOCTYPE声明</p><p>
	不声明DOCTYPE，或者在文件开始错误声明DOCTYPE，也是一个常见错误。根据一般经验，Strict DOCTYPE是大家追求的最高级验证。Strict validation表明你的网页能够在所有浏览器上都得到最佳展示。Strict 声明代码如下：</p><p>
	&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;</p><p>
	4、结尾斜线</p><p>
	如果你的网站不能验证，很有可能是在代码的某个地方漏写了结尾斜线。我们很容易忽略结尾斜线之类的东西，特别是在image标签等元素中。例如：</p><p>
	在严格的DOCTYPE中这是无效的。要在img标签结尾处加上“/”以解决此问题。</p><p>
	&lt;img src=&quot;&quot; alt=&quot;&quot;&gt;</p><p>
	5、Align标签</p><p>
	如果DOCTYPE被设为Transitional，你就会使用“align”标签，但如果要求更高一点希望得到Strict验证，你会看到很多错误。
 Align是另一个不可用于版面设计的标签。可以尝试用“float”或者“text-align”来代替align转换元素。</p><p>
	6、JavaScript</p><p>
	如果已经声明Strict DOCTYPE，就需要在JavaScript中覆盖CDATA标签。验证程序的这一方面难倒了很多程序员，因为网站倾向于为广告和追踪脚本使用嵌入的 JavaScript。如果必须用到JavaScript，可以在其前后加上如下标签：</p><p>
	&lt;script type=&quot;text/javascript&quot;&gt;&nbsp;</p><p>
	/* &lt;![CDATA[ */</p><p>
	// JavaScript here</p><p>
	};</p><p>
	/* ]]&gt; */</p><p>
	&lt;/script&gt;</p><p>
	7、图像需要“alt”属性</p><p>
	你可能还没有注意到，图像也是高级验证的潜在绊脚石。除了结尾斜线，高级验证也要求用alt标签来描述图像，如alt= ”Scary vampire picture”.</p><p>
	搜索引擎也靠alt标签来识别网页上的图像，所以无论怎样加上alt标签总是好的。</p><p>
	8、未知实体数据</p><p>
	实体数据是又一个影响验证的易犯错误。我们可以考虑用适当的编码字符来代替“&amp;”等符号。entire list中列出在XHTML版块设计中可用的适当的编码字符实体数据。</p><p>
	9、不良嵌套</p><p>
	嵌套就是元素里又包括元素，如下所示：</p><p>
	&lt;div&gt;&lt;strong&gt;Sweet!&lt;/strong&gt;&lt;/div&gt;</p><p>
	我们容易混淆嵌套元素的顺序。例如在div标签前启动strong标签，但又先关闭div标签。这可能不会改变版块布局，但却会使你的版块设计失效。</p><p>
	10、缺少“title”标签</p><p>
	尽管这看上去是一个很明显的错误，很多程序员(包括我自己)还是经常会在“head”版块中遗漏title标签。当你看到“missing a 
required sub-element of HEAD”(缺少HEAD的必要子元素)时，才会发现自己忘记添加title标签了。</p><p><br/></p>', N'/Upload/VoteImg/VoteHeadImg/2021-06-183bf68ceb-b47a-4a1b-a65e-f14ed1e2cfec.jpg', N'作为网站技术开发人员而言,往往是站在自己的开发角度来实 施网站布署(读取数据及开发的方便性等等),而不是站在网站访问者与搜索引擎角度。因此大部分的网站在浏览方面不够直观...', 8, N'未填写')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (10, N'10240005', N'经验分享', CAST(N'2021-06-19T00:13:43.617' AS DateTime), N'毕业五年，从月薪3000到年薪百万，我掌握了哪些核心技能？', N'<p>大家好，我是冰河~~</p><p>很多读者私信问我，自己时间不短了，随着工作年限的不断增长，感觉自己的技术水平与自己的工作年限严重不符。想跳槽出去换个新环境吧，又感觉自己的能力达不到心仪公司的标准，即使投了简历也没人来通知自己面试。就这样在原来的公司一天天的混日子，时间久了，感觉自己废了，就这么恶性循环着。</p><p>如何破局？</p><p>首先，如果你认为自己是一个天才程序员，那么你可以不按照我说的做，因为你是天才，你可以分分钟达到甚至超过百万。如果你认为自己只是一个普通人，那好，继续往下看，相信会对你有所帮助的。</p><p><img src="/image/BlogContent_Img/20210619/6375965830540014242207766.jpg" title="20201226014739969.jpg" alt="20201226014739969.jpg"/></p><p><br/></p><p>我们该如何打破自己的技术水平和工作年限严重不符的这个僵局呢？</p><p>首先，最重要的还是心态 。为什么这么说，因为从事互联网开发工作，程序员的压力其实还是蛮大的，在高强度的日常工作中，就需要我们以良好的心态来面对自己的工作。其次，就是要学会释放压力，以正确的方式来释放或者缓解自己心中的压力。</p><p><img src="/image/BlogContent_Img/20210619/6375965831898938229855256.png" title="20201226014831348.png" alt="20201226014831348.png" width="660" height="281"/></p><p><br/></p><p>其次，就是关键的一点，你要从心底问自己是否对现在的工作感兴趣。 其实，我们都知道，只要是做我们自己感兴趣的事情，就会事半功倍，如果是出于某种原因不得不去做某件事，这样往往会是投入了很大的精力，效果往往还不太好，这就是我们常说的事倍功半。</p><p>经常有小伙伴在微信上私信我：我是学Java呢？还是学Python呢？哪个吃香啊？哪个好找工作啊？学习大数据怎么样啊？大数据是不是已经饱和了啊？这一连串的问题，其实，我看到小伙伴们的这些问题，我都不知道如何回答。为什么呢？其实这些问题，小伙伴们心里应该都清楚：只要你足够认真的坚持学下去，学什么都能够找到一份好工作。</p><p>究其本质， 对于我们这些搞技术的人来说，年龄的增长其实没有外界说的那么可怕，真正可怕的是你的年龄和你所掌握的技术深度没有匹配。如果你的年龄与你的技术深度不匹配时，你是很难找到一个令自己满意的工作的。试想，如果你已经工作5、6年了，你所做的工作连1、2年工作经验甚至是应届毕业生都能做时，那公司为啥还要你来做呢？给你养老吗？公司是要盈利的，盈利就意味着要赚钱。怎么赚钱？节省成本就是一种赚钱的方式，那不好意思，你就会被淘汰掉。</p><p>所以，在技术这条道路上，你也需要选择一个自己感兴趣的方向。比如：Java、Python、大数据、云计算、云原生等等。接下来，就是深入学习了。要知道： 再牛逼的技术，也抵不过傻逼似的坚持。 只要坚持，就没有学不会的技术。</p><p>在学习的过程中，一定要明确自己学什么，切记不要三心二意。不要今天学习Java，明天又想学习Python了。一定要给自己制定一个目标，并将目标拆分为每天的学习计划。</p><p>学些什么？</p><p>调整好心态后，我们再来看看需要学习哪些内容。</p><p>夯实基础</p><p>首先，就是要夯实自己的基础。比如对Java集合框架，多线程与并发包，IO/NIO，JVM，内存模型，泛型，异常，反射，等有深入了解，最好是看过源码了解底层的设计。</p><p style="text-align: center;"><img src="/image/BlogContent_Img/20210619/6375965834579205874735555.png" title="20210413202308129.png" alt="20210413202308129.png" width="624" height="591"/></p><p>比如一般面试都会问 ConcurrentHashMap，CopyOnWrite，线程池，CAS，AQS，虚拟机优化等知识点，因为这些对互联网的企业是绝对重要的。而且一般人这关都过不了，还发牢骚说这些没什么用，为什么要面试。</p><p>这里，我给大家举一个我所经历的项目的真实案例。之前，我所在的公司，在做一个高并发电商项目时，一名开发同学在项目中，因为使用了默认的创建线程池的方式，导致线程池中使用了默认的无界队列，在远程服务异常情况下导致内存飙升。最终通过排查源码定位到问题，将其修改为有界队列，解决了问题。</p><p>试想，你要是连线程池都不清楚，你怎么去玩？再举一例，由于对 ThreadLocal 理解出错，使用它做线程安全的控制，导致没能实现真的线程安全。此时，你会怎么解决这个问题？</p><p>所以，基础很重要，一定要把基础学扎实。万丈高楼平地起，只有把基础搞扎实了，上层建筑才会更加牢固。</p><p>深入互联网技术知识</p><p>关于这一点，我们需要从底层说起，你起码得深入了解 MySQL，Redis，MongoDB，Nginx，Tomcat，RPC，JMS、Dubbo、SpringCloud、SpringCloud Alibaba、性能调优、Netty、服务注册发现、服务治理、各种中间件、互联网工程、并发编程、分布式、微服务、云原生等等方面的知识。</p><p>在这里插入图片描述</p><p><br/></p><p>你要问需要了解到什么程度，这里，我可以给你举几个例子：首先对于 MySQL，你要知道常见的参数设置，存储引擎怎么去选择，还需要了解常见的索引引擎，知道怎么去选择。知道怎么去设计表，怎么优化 SQL，怎么根据执行计划去调优。掌握如何去做分库分表的设计和优化，一般互联网企业的数据库都是读写分离，还会垂直与水平拆分，所以这些也需要你多多少少掌握。</p><p>然后 Redis，Mongodb 都是需要了解原理，需要会调整参数的。</p><p>而 Nginx 和 Tomcat 几乎都是 JAVA 互联网开发必配的Web服务器，这点，可能跟阿里的技术栈选择有点关系。</p><p>至于RPC相关的就比较多了，必须了解各种网络协议，序列化技术，SOA 等等，你要有一个深入的理解。现在应用比较广的 RPC 框架，在国内就是 dubbo 了，小伙伴们可以到Dubbo的官网进行学习，也可以到github下载源码进行学习。</p><p>至于其他的嘛，就需要小伙伴们自己去研究了。总之，掌握它们，对你没坏处。</p><p>培养硬核能力</p><p>我这里说的硬核能力，指的就是：编程能力，编程思想，算法能力，架构能力、设计能力、沟通能力、调优能力、系统驾驭能力、行业影响力。</p><p>这里，我就简单的说下，除了基础部分和互联网技术需要掌握的技能外，还有几个是必须要掌握的，那就是：编程能力、编程思想、算法能力、架构能力、设计能力、沟通能力、调优能力、系统驾驭能力、行业影响力。</p>', N'异常：未将对象引用设置到对象的实例。', N'很多读者私信问我，自己时间不短了，随着工作年限的不断增长，感觉自己的技术水平与自己的工作年限严重不符。想跳槽出去换个新环境吧，又...', 4, N'未填写')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (11, N'10240005', N'资源分享', CAST(N'2021-06-19T00:18:33.770' AS DateTime), N'这21款Windows软件，学妹用了直呼Nice！！！', N'<p>作者简介：</p><p>&nbsp; &nbsp; 作者：LuciferLiu</p><p>&nbsp; &nbsp; 中国DBA联盟(ACDU)成员。目前从事Oracle DBA工作，曾从事 Oracle 数据库开发工作，主要服务于生产制造，汽车金融等行业。现拥有Oracle OCP，OceanBase OBCA认证，擅长Oracle数据库运维开发，备份恢复，安装迁移，Linux自动化运维脚本编写等。</p><p>前言</p><p>经常会有朋友让我推荐一些好用的软件，因此我打算写一篇博客来介绍一下这些我认为爱不释手的软件：</p><p>&nbsp; &nbsp;?? 排名不分先后，提升电脑使用舒适度100倍的21款软件??：</p><p>&nbsp; &nbsp; 火绒（安全软件）</p><p>&nbsp; &nbsp; IDM（万能下载软件）</p><p>&nbsp; &nbsp; Bandizip for Windows（解压缩软件）</p><p>&nbsp; &nbsp; Geek Uninstaller（清理工具）</p><p>&nbsp; &nbsp; PotPlayer（视频播放器含皮肤）</p><p>&nbsp; &nbsp; 元气壁纸（桌面壁纸软件）</p><p>&nbsp; &nbsp; Microsoft Edge（浏览器）</p><p>&nbsp; &nbsp; Everything Toolbar（本地搜索软件插件）</p><p>&nbsp; &nbsp; Memreduct（内存优化工具）</p><p>&nbsp; &nbsp; Ditto（剪贴板增强工具）</p><p>&nbsp; &nbsp; ShareX（全能截图工具）</p><p>&nbsp; &nbsp; Windows10优化工具</p><p>&nbsp; &nbsp; AutoDarkMode（随系统自动切换主题）</p><p>&nbsp; &nbsp; 全能格式转换器（互相转换任意格式文件）</p><p>&nbsp; &nbsp; win10切换版本（windows系统，支持切换版本）</p><p>&nbsp; &nbsp; 在线简历制作</p><p>&nbsp; &nbsp; Office Tool Plus（一键安装多版本Office软件）</p><p>&nbsp; &nbsp; Empty Folder Finder（空文件夹删除器，强迫症专用）</p><p>&nbsp; &nbsp; QuickLook Windows（模仿Macbook快速预览神器插件）</p><p>&nbsp; &nbsp; Clover（替代Windows资源管理器的多标签插件）</p><p>&nbsp; &nbsp; Notepads（轻量高颜值文本编辑器）</p><p>注意：软件合集下载方式请跳转文末。</p><p>软件介绍</p><p>1、火绒</p><p style="text-align: center;"><strong>作为一款安全软件，火绒算是国内的一股清流（他们官网的口号是：<span style="color:blue">强悍、 轻巧、 干净</span>），没有广告、弹窗等骚扰用户的行为，而且火绒还关停了流量业务，也赢来了好的口碑。</strong><br/><img src="/image/BlogContent_Img/20210619/6375965864046229075745199.png" title="20210614154248245.png" alt="20210614154248245.png" width="640" height="495"/></p><p><br/></p><h6>2、<code>IDM</code></h6><p style="text-align: center;">IDM（Internet Download Manager）是国外优秀下载工具，可提升下载速度（最多可达5倍），能安排下载计划，或续传下载一半的下载软件。IDM简体中文特别版，安装后免序列号即为注册版。配合浏览器插件使用，堪称神器。<img src="/image/BlogContent_Img/20210619/6375965867727780621431193.png" title="20210614155716805.png" alt="20210614155716805.png" width="608" height="346"/></p><h6><span style="color:blue">软件获取方式：</span></h6><blockquote><p>1、关注公众号 <code>Lucifer三思而后行</code> 自动获取<br/> 2、私信回复 ：<code>windows必备软件</code></p></blockquote><h6><a></a>如果觉得文章对你有帮助，<span style="color:red">点赞</span>、<span style="color:red">收藏</span>、<span style="color:red">关注</span>、<span style="color:red">评论</span>，一键四连支持，你的支持就是我创作最大的动力，谢谢~</h6><p><br/></p>', N'/Upload/BlogImg/BlogCoverImg/2021-06-1983f978e0-32bd-4176-8746-5144e427ae7a.png', N'经常会有朋友让我推荐一些好用的软件，因此我打算写一篇博客来介绍一下这些我认为爱不释手的软件：', 2, N'未填写')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (12, N'10240005', N'干货分享', CAST(N'2021-06-24T15:46:11.950' AS DateTime), N'作为计算机专业学生，最应该学习的课程前五位是什么？', N'<p>不知不觉自己的程序员生涯已经有 6 年。<br/>变秃了，也变强了。<br/>如果让我回到大学生涯，我一定会认认真真的学习下面的课程，起码我的头发可以少掉一半！<br/>1、计算机组成原理<br/>2、计算机操作系统<br/>3、计算机编译原理<br/>4、数据结构与算法<br/>5、计算机网络<br/>一、计算机组成原理<br/>计算机组成原理这门课很好地向我们阐述了计算机是如何工作的，妹子咨询你电脑问题的时候，答案就藏在这门课程里面（大雾）。<br/>推荐书籍：《深入理解计算机系统》<br/>这本书是从程序员的角度来看待整个计算机系统的，所以是非常适合程序员的。但是这本书不仅仅包含了计算机硬件的相关知识，同时还包含了包括操作系统、计算机网络等相关知识。<br/>二、计算机操作系统<br/>无论你学习什么编程语言，和都避免不了和操作系统打交道，比如你学习 Java，用到多线程技术，实际上操作系统才是负责管理进程和线程的；比如你学习到内存分配的知识，c++里可以直接分配一段内存，此时实际上是调用操作系统提供的API进行内存分配。<br/>如果不懂操作系统，你在未来学习编程语言的高级特效，涉及到线程进程调度，内存分配，或者是学习Linux相关的知识时，都会一头雾水，所以，只有学会了操作系统，我么才能够更好地学习其他语言和技术。<br/>基于此，计算机操作系统的知识点频繁出现在笔试环节。<br/>毕业的程序员或者非科班的程序员可以看看下面的两篇文章，就当再复习学习一遍。<br/>三、计算机编译原理<br/>首先正式一个问题：编译原理并非随随便便就能入门的！<br/>换言之，需要准备一些基础知识在学习。<br/>编译原理的学习和实践通常基于对计算机编译过程、计算机基本工作原理、甚至一定的数学知识有一定积累，这些知识分别分布并应用在了编译原理的不同阶段。没有这些基本知识的积累，很快就会在某个阶段由于功底不够而无法再继续后面的学习。<br/>所以，先认认真真的积累上述的一和二在入门学习吧。<br/>四、数据结构与算法<br/>相信无论是已经毕业的同学还是正在学校学习的同学，都或多或少地被数据结构与算法这门课给折磨过。数据结构与算法这门课开篇就讲了一个非常重要的概念：程序 = 数据结构 + 算法，对于初学者可能还不能完全地理解这句话，不过对于已经工作两三年的同学相信对这句话是深信不疑的。<br/>对于数据结构与算法的学习，我个人认为应该分层三个步骤：首先先大致了解什么是算法，可以通过一些科普读物来入门，这个过程我称之为入门阶段；接着可以尝试实现一些比较容易的数据结构和算法，这样可以更加深对数据结构和算法的了解，这个过程我称之为实践阶段；最后去了解数据结构与算法背后的相关数学原理等，这个过程我称之为原理阶段。<br/>五、计算机网络<br/>计算机网络的相关知识在工作时使用的频率还是挺多的，毕竟，所谓的CURD工程师总是在处理 API 相关的业务。<br/>关于计算机基础的内容，我整理了 4 本手册，全网累积下载100w次，几乎程序员人手一套，包含数据结构与算法、操作系统、计算机组成原理、计算机网络等硬核基础知识，图文+实战案例，平时开发+搞定面试，帮你快速建立对计算机科学的大局观，夯实计算机基本功，瞬间起飞～<br/><br/></p>', N'/Upload/BlogImg/BlogCoverImg/2021-06-24f63c87fa-f4d3-4102-8809-19f6219562d5.gif', N'不知不觉自己的程序员生涯已经有 6 年。变秃了，也变强了。如果让我回到大学生涯，我一定会认认真真的学习下面的课程，起码我的头发可以少掉一半！', 11, N'江西省, 南昌市, 西湖区, 丁公路, 141号')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (13, N'10240005', N'经验分享', CAST(N'2021-06-25T11:49:04.067' AS DateTime), N'未能加载文件或程序集“Newtonsoft.Json”', N'<p>一：页面显示如下错误</p><p><img src="/image/BlogContent_Img/20210625/6376021844306229689651461.png" title="201808281029545391.png" alt="201808281029545391.png" width="589" height="302"/></p><p>二 运行时显示</p><p><img src="/image/BlogContent_Img/20210625/6376021846789180551862012.png" title="20180828103101739.png" alt="20180828103101739.png" width="622" height="415"/></p><p>三：在web.config中修改Newtonsoft.Json.dll版本<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 出错前显示如下：</p><p><img src="/image/BlogContent_Img/20210625/6376021853623574062881241.png" title="20180828103443715.png" alt="20180828103443715.png"/></p><p>&nbsp;&nbsp; 找到Newtonsoft.Json.dll引用的版本<br/>&nbsp;&nbsp;&nbsp; 然后修改成当前版本</p><p><img src="https://localhost:44384/image/BlogContent_Img/20210625/6376021850054656611522309.png" title="20180828103326882.png" alt="20180828103326882.png" width="703" height="79"/></p><p>然后保存web.config 运行即可。<br/><br/></p>', N'/Upload/BlogImg/BlogCoverImg/2021-06-25497a5125-2197-4f13-b774-538f1175d258.png', N'未能加载文件或程序集“Newtonsoft.Json”或它的某一个依赖项。找到的程序集清单 --解决', 6, N'江西省, 南昌市, 西湖区, 广场东路, 23号')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (14, N'10240002', N'经验分享', CAST(N'2021-06-28T08:25:25.770' AS DateTime), N'含泪拿下腾讯60W Offer，五轮面试，六个小时，灵魂拷问', N'<p>在互联网做了几年之后，去大厂“镀镀金”是大部分人的首选。大厂不仅待遇高、福利好，更重要的是，它是对你专业能力的背书，大厂工作背景多少会给你的简历增加几分竞争力。<br/>但说实话，想进大厂还真没那么容易。我的一个朋友在入职腾讯之前，大大小小的面试经历了十几次，最后终于在 4 轮技术面+1 轮 HR 面之后成功接到 Offer，40k*16 薪！</p><p><img src="/image/BlogContent_Img/20210628/6376046541726240805314612.png" title="d94fbb376411c167b06814b4640952f3.png" alt="d94fbb376411c167b06814b4640952f3.png" width="670" height="263"/></p><p>第一轮主要考察 Java 基础， 比如：<br/>&nbsp;&nbsp;&nbsp; hashmap的实现<br/>&nbsp;&nbsp;&nbsp; Java中的垃圾回收<br/>&nbsp;&nbsp;&nbsp; 除了代码之外你还学习了什么技术，框架<br/>&nbsp;&nbsp;&nbsp; 死锁是怎么产生的<br/>&nbsp;&nbsp;&nbsp; 线程和进程的区别<br/>二、三轮注重对应?技术的掌握：<br/>&nbsp;&nbsp;&nbsp; MySQL的索引，B+树性质<br/>&nbsp;&nbsp;&nbsp; Redis的持久化方式<br/>&nbsp;&nbsp;&nbsp; TCP四次挥手讲一下过程，最后一次ack如果客户端没收到怎么办<br/>&nbsp;&nbsp;&nbsp; 对于socket编程，accept方法是干什么的，在三次握手中属于第几次<br/>四面则是关于参与过的项目和在对业务的理解。<br/><br/></p>', N'/Upload/BlogImg/BlogCoverImg/2021-06-282604b761-78ce-4e18-9c4c-4e469d785356.png', N'在互联网做了几年之后，去大厂“镀镀金”是大部分人的首选。大厂不仅待遇高、福利好，更重要的是，它是对你专业能力的背书，大厂工作背景多少会给你的简历增加几分竞争力。', 2, N'江西省, 南昌市, 西湖区, 广场东路, 23号')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (10014, N'10240002', N'经验分享', CAST(N'2021-06-28T09:52:06.193' AS DateTime), N'Windows操作系统+朝鲜红星+国产麒', N'<p><br/></p><p>在CSDN混迹这么多年</p><p>感觉在技术宽度和广度都深不可测的C站</p><p>Windows方面的技术相对较少一些</p><p>今天，借着寻找C站宝藏的活动</p><p>介绍一些C站宝藏的 Windows相关资源+技术专栏</p><p>附带一下猎奇操作系统的资源~~~</p><p><img src="/image/BlogContent_Img/20210628/6376047070510896961326008.png" title="20210626123927293.png" alt="20210626123927293.png" width="663" height="440"/></p>', N'/Upload/BlogImg/BlogCoverImg/2021-06-28bfe39be6-179e-448a-bb8f-0e0dc04f59eb.png', N'Windows操作系统+朝鲜红星+国产麒麟+红旗+渗透专用系统+Oracle专用+技术专栏【资源大合集】 | 寻找C站宝藏', 1, N'江西省, 南昌市, 西湖区, 广场东路, 23号')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (10015, N'10240002', N'经验分享', CAST(N'2021-11-01T20:12:15.067' AS DateTime), N'哈哈', N'<p><img src="/image/BlogContent_Img/20211101/6377139433156738276123962.png" title="2021061011415540.png" alt="2021061011415540.png"/>撒大苏打</p>', N'/Upload/BlogImg/BlogCoverImg/2021-11-015d314923-c0ac-49e2-96d1-3d141d40c3c4.jpg', N'啊实打实', 3, N'江西省, 南昌市, 东湖区, 省府东一路, 7号')
INSERT [dbo].[Blog] ([BlogID], [PublisherID], [BlogType], [PublishDate], [Title], [BlogContent], [CoverImg], [Describe], [ViewCount], [Address]) VALUES (10016, N'10240002', N'干货分享', CAST(N'2022-02-28T09:47:37.130' AS DateTime), N'飘了，英特尔2年内要发布高效芯片超过苹果M1', N'<p>自从Mac电脑过渡到ARM架构以来，英特尔一直在努力击败Apple Silicon芯片，这已经不是什么秘密了。虽然英特尔已在陆续推出强大的新芯片，但它的效率远不及苹果。</p><p>近日，一份泄露的英特尔路线图表明，该公司正在开发新的CPU阵容。预计到2023年底或2024年初，其性能超过配备M1 Pro和M1 Max芯片的苹果14英寸MacBook Pro。<br/></p><p>芯片将致力于减少能耗<br/></p><p>这份路线图由AdoredTV泄露，Wccftech对其进行了解释。Wccftech指出，英特尔的第15代Arrow Lake处理器计划在2023年底或2024年初出货，英特尔希望能够通过Arrow Lake系列与苹果竞争。这一次，英特尔将优先考虑移动芯片而不是台式机，并将在使用最少能源的同时提供高性能CPU。</p><p>英特尔优先考虑移动而不是桌面系统，虽然将同时推出Arrow Lake-S和Arrow Lake-P两种CPU，但该公司的首要目标是专门生产其第15代移动CPU，以应对苹果的下一代MacBook 14英寸笔记本。据泄露的路线图显示，首批工程样品将在2022年底和2023年初看到，QS芯片将在2023年第三季度生产、发货。最后，这些CPU将在2023年第四季度准备好用于RTS（Ready To Ship）。这意味下一代Arrow Lake移动CPU阵容将在2023年底或2024年初推出。<br/></p><p>据英特尔路线图显示，Arrow Lake会使用台积电的3nm工艺。虽然苹果正在其最新的处理器中使用5nm工艺，但预计2023年，苹果会在“M3”Apple Silicon芯片和用于iPhone 15的“A15”芯片中采用3nm工艺。&nbsp;<br/></p><p><img src="/image/BlogContent_Img/20220228/6378163842277447449015355.png" title="8100bc6222ed3b75d48c8d88f5a096fc.png" alt="8100bc6222ed3b75d48c8d88f5a096fc.png" width="692" height="324"/></p><p><br/></p><p><br/></p><p>图源：推特</p><p><br/></p><p>超越了？但还没完全超</p><p>今年一月份，英特尔对外声称新的酷睿i9处理器比苹果M1 Max更快。</p><p><br/></p><p>英特尔表示，第12代酷睿i9处理器的频率高达5GHz，拥有14个内核（包括6个高性能内核和8个节能内核），是市场上 &quot;最快的移动处理器&quot;。</p><p><br/></p><p>英特尔宣布推出世界上最快的移动处理器，首次将其性能混合架构引入移动平台，新的第12代英特尔酷睿移动处理器比上一代移动处理器快40%。</p><p><br/></p><p>相比之下，苹果M1 Max芯片的10个核心（其中8个为高性能核心，2个为节能核心）最高可达3.2GHz，第12代英特尔酷睿i9处理器在这方面确实比苹果M1 Max更好。但在全性能运行时，苹果凭借其基于ARM的Apple Silicon芯片取得了胜利。</p><p><br/></p><p>英特尔酷睿i9的功耗高达115瓦，但M1 Max芯片的功耗大部分时间都保持在60瓦左右，在全性能运行时几乎不会超过90瓦，英特尔的功耗几乎是M1 Max的两倍。对于笔记本电脑来说，能源效率至关重要。较低的功耗允许建造更紧凑的机器，不会受到热节流和性能下降的影响，这是英特尔用旧的x86架构很难实现的。</p><p><br/></p><p>对于英特尔的这一计划，有媒体表示，“当然，英特尔可能会成功击败苹果的M1芯片，但现在为时已晚。”因为在英特尔推出下一代处理器之前，苹果即将发布用于第三代Mac的 Apple Silicon芯片，这肯定会比目前的M1芯片和英特尔制造的任何芯片更加高效和强大。</p><p><br/></p><p>所以，英特尔想要追赶苹果甚至超越苹果，这将是一个巨大的挑战。</p><p><br/></p><p>参考链接：</p><p><br/></p><p>1.https://9to5mac.com/2022/02/23/leaked-intel-roadmap-reveals-more-efficient-chip-to-beat-m1-but-its-too-late/</p><p><br/></p><p>2.Leaked Intel Roadmap Hints on 15th-Gen &#39;Arrow Lake&#39; CPUs Rumored to be Better than Apple&#39;s M1 Chips | Tech Times</p><p><br/></p><p>3.https://9to5mac.com/2022/01/04/intel-claims-the-new-core-i9-processor-is-faster-than-the-apple-m1-max-but-that-doesnt-mean-much/</p><p><br/></p><p><br/></p>', N'/Upload/BlogImg/BlogCoverImg/2022-02-28ae7f3315-9fb0-482e-be8f-01212397ff69.png', N'自从Mac电脑过渡到ARM架构以来，英特尔一直在努力击败Apple Silicon芯片，这已经不是什么秘密了。虽然英特尔已在陆续推出强大的新芯片，但它的效率远不及苹果。

近日，一份泄露的英特尔路线图表', 1, N'江西省, 南昌市, 西湖区, 金盘路, 87号')
SET IDENTITY_INSERT [dbo].[Blog] OFF
SET IDENTITY_INSERT [dbo].[BlogComment] ON 

INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (1, N'10240002', 3, N'你的文章写得也忒好了.', CAST(N'2021-06-24T08:48:54.480' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (2, N'10240008', 3, N'给阿姨倒杯卡不起诺.', CAST(N'2021-06-24T08:48:54.600' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (3, N'10240011', 3, N'强啊！.', CAST(N'2021-06-24T08:48:54.600' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (4, N'10240005', 3, N'你的牌大的也太好了！', CAST(N'2021-06-24T09:22:01.987' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (5, N'10240005', 3, N'快点吧！等的花都谢了！', CAST(N'2021-06-24T09:25:35.387' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (6, N'10240005', 3, N'楼下几个别水评论！', CAST(N'2021-06-24T09:30:16.713' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (8, N'10240013', 3, N'大家都知道“内容为王”，网站的内容是重中之重，AB模板王建议，可以从一些报纸杂志、多媒体或是生活中寻找素材，既要使文章有价值，又要能吸引用户的眼球，做好了这一点，网站的流量才会越来越多。', CAST(N'2021-06-24T09:38:57.057' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (9, N'10240013', 2, N'千万不要去采集别人的文章，这样的文章重复度太高，没有什么价值，对网站没有任何帮助，还会让搜索引擎觉得你的网站是一个垃圾站，导致网站的排名降低。', CAST(N'2021-06-24T09:40:57.530' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (10, N'10240013', 13, N'你的牌大的也太好了！', CAST(N'2021-06-25T11:51:32.580' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (11, N'10240006', 13, N'快点吧！我等的花都谢了！', CAST(N'2021-06-25T15:03:55.963' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (12, N'10240002', 3, N'好', CAST(N'2021-06-28T09:49:17.603' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (13, N'10240002', 10014, N'123', CAST(N'2021-06-28T09:52:30.650' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (14, N'10240002', 2, N'啊实打实', CAST(N'2021-11-01T20:22:35.273' AS DateTime))
INSERT [dbo].[BlogComment] ([CommentID], [CommenterID], [BlogID], [Content], [CommentDate]) VALUES (15, N'10240002', 2, N'123', CAST(N'2022-02-28T09:48:36.150' AS DateTime))
SET IDENTITY_INSERT [dbo].[BlogComment] OFF
SET IDENTITY_INSERT [dbo].[Collect] ON 

INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (1, N'10240001', 2)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (2, N'10240012', 15)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (5, N'10240002', 15)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (6, N'10240002', 2)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (7, N'10240003', 7)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (9, N'10240007', 9)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (10, N'10240008', 10)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (11, N'10240009', 11)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (12, N'10240010', 11)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (13, N'10240011', 12)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (14, N'10240012', 13)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (16, N'10240013', 14)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (17, N'10240014', 16)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (21, N'10240014', 17)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (23, N'10240001', 1)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (24, N'10240001', 3)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (25, N'10240002', 5)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (26, N'10240002', 6)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (27, N'10240002', 7)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (28, N'10240003', 8)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (29, N'10240004', 12)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (31, N'10240002', 33)
INSERT [dbo].[Collect] ([CollectId], [UsersId], [ProductionId]) VALUES (10032, N'10240002', 38)
SET IDENTITY_INSERT [dbo].[Collect] OFF
SET IDENTITY_INSERT [dbo].[Comments] ON 

INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (1, CAST(N'2020-11-28T16:56:57.460' AS DateTime), N'呜呜呜，爱了爱了', N'10240005', 1)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (2, CAST(N'2020-11-28T17:01:05.707' AS DateTime), N'总不能还没有努力就向生活妥协', N'10240003', 1)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (3, CAST(N'2020-11-28T17:01:05.710' AS DateTime), N'我发现很多年少有为的人都是经历过很大的苦难挺过来才有今天的风光，所以你年少时吃过的苦终有一天会成为你站到人生高处的基石。 ?
', N'10240001', 1)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (4, CAST(N'2020-11-28T17:01:05.710' AS DateTime), N'我年少却不有为不懂得珍贵却自卑', N'10240011', 1)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (5, CAST(N'2020-11-28T17:01:05.710' AS DateTime), N'我听过最愚昧的，莫过于至尊宝那句“曾经有份真挚的爱情摆在我的眼前，而我...”扪心自问，假如我年少有为，我就能真的好好爱她吗.一碗粥，温暖了寒冬，却没能温暖她的心.人啊，总在失去之后才懂得珍惜，要意识到年少有为无为，与爱不爱毫无关系.请珍惜风雨陪伴的人，风雨有阻，有情人无阻.
', N'10240008', 1)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (6, CAST(N'2020-11-28T18:11:41.657' AS DateTime), N' 梦想总是遥不可及，我们不应该放弃。', N'10240012', 1)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (110, CAST(N'2020-12-26T22:31:35.550' AS DateTime), N' 2', N'10240002', 2)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (111, CAST(N'2020-12-26T23:30:22.383' AS DateTime), N' 213', N'10240002', 2)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (112, CAST(N'2020-12-26T23:38:01.720' AS DateTime), N' 222', N'10240002', 2)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (113, CAST(N'2020-12-26T23:38:10.827' AS DateTime), N' 123', N'10240002', 2)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (114, CAST(N'2020-12-26T23:42:34.117' AS DateTime), N' 222', N'10240002', 2)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (115, CAST(N'2021-06-25T09:32:34.583' AS DateTime), N' sada', N'10240003', 27)
INSERT [dbo].[Comments] ([CommentId], [CommentDate], [CommentContent], [CommenterId], [ProductionId]) VALUES (116, CAST(N'2021-06-25T09:33:09.913' AS DateTime), N' 123213', N'10240003', 27)
SET IDENTITY_INSERT [dbo].[Comments] OFF
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240001', CAST(N'2020-11-11T00:00:00.000' AS DateTime), N'音乐', 100, N'正常', 1, 0, CAST(0.00 AS Decimal(5, 2)), 0, N'1000-2000')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240002', CAST(N'2020-09-24T00:00:00.000' AS DateTime), N'视频', 100, N'正常', 1, 4, CAST(1.00 AS Decimal(5, 2)), 0, N'50-150')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240003', CAST(N'2021-05-13T11:30:56.427' AS DateTime), N'视频', 100, N'正常', 1, 0, CAST(0.00 AS Decimal(5, 2)), 0, N'200-500')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240005', CAST(N'2021-05-18T15:20:10.907' AS DateTime), N'音乐', 100, N'正常', 1, 0, NULL, 0, N'100-200')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240007', CAST(N'2020-11-18T00:00:00.000' AS DateTime), N'音乐', 100, N'正常', 1, 0, NULL, 0, N'50-150')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240008', CAST(N'2020-08-15T00:00:00.000' AS DateTime), N'诗歌', 100, N'正常', 1, 1, NULL, 0, N'100-500')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240009', CAST(N'2020-02-18T00:00:00.000' AS DateTime), N'摄影', 100, N'正常', 1, 0, NULL, 0, N'800-1000')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240010', CAST(N'2019-03-18T00:00:00.000' AS DateTime), N'摄像', 100, N'正常', 1, 0, NULL, 0, N'200-500')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240011', CAST(N'2020-05-28T00:00:00.000' AS DateTime), N'漫画', 100, N'正常', 1, 0, NULL, 0, N'20-100')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240012', CAST(N'2018-06-06T00:00:00.000' AS DateTime), N'视频制作', 100, N'正常', 1, 0, NULL, 0, N'80-200')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240013', CAST(N'2018-12-06T00:00:00.000' AS DateTime), N'自创视频', 100, N'正常', 1, 0, NULL, 0, N'10000-20000')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240014', CAST(N'2021-06-03T09:05:23.813' AS DateTime), N'文字', 100, N'正常', 1, 0, NULL, 0, N'100-200')
INSERT [dbo].[Creator] ([CreatorId], [CertificationDate], [CreateType], [CreatorCredit], [State], [CreatorLevel], [FinishedCount], [GoodRate], [EfctCmpltCnt], [PriceRange]) VALUES (N'10240015', CAST(N'2021-06-03T09:08:27.887' AS DateTime), N'视频', 100, N'正常', 1, 0, NULL, 0, N'100-200')
SET IDENTITY_INSERT [dbo].[Evaluate] ON 

INSERT [dbo].[Evaluate] ([EvaluateId], [OrderId], [UsersId], [Content], [EvaluateDate]) VALUES (1, 3, N'10240012', N'不错，下次再来！', CAST(N'2021-01-02T15:10:54.310' AS DateTime))
INSERT [dbo].[Evaluate] ([EvaluateId], [OrderId], [UsersId], [Content], [EvaluateDate]) VALUES (2, 4, N'10240012', N'博主的产品真的很好，良心推荐', CAST(N'2021-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Evaluate] ([EvaluateId], [OrderId], [UsersId], [Content], [EvaluateDate]) VALUES (7, 13, N'10240012', N'无意中发现的一款装饰画，给新家用的，珐琅材料很特别也很漂亮，没有白等！', CAST(N'2021-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Evaluate] ([EvaluateId], [OrderId], [UsersId], [Content], [EvaluateDate]) VALUES (8, 14, N'10240003', N'画真的非常非常好看！！！原本觉着手工珐琅画太贵了没舍得买，买了一副三百的，到家完全没有质感无奈退了咬牙买的这幅画。虽然贵，但物超所值！！！', CAST(N'2021-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Evaluate] ([EvaluateId], [OrderId], [UsersId], [Content], [EvaluateDate]) VALUES (9, 7, N'10240006', N'产品功能：nice 外观材质：nice 商品品质：很高档的材料。', CAST(N'2021-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Evaluate] ([EvaluateId], [OrderId], [UsersId], [Content], [EvaluateDate]) VALUES (10, 8, N'10240007', N'大方，不错！一共买了两副，一副挂客厅一副挂饭厅', CAST(N'2021-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Evaluate] ([EvaluateId], [OrderId], [UsersId], [Content], [EvaluateDate]) VALUES (11, 1, N'10240001', N'很好哦', CAST(N'2021-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Evaluate] ([EvaluateId], [OrderId], [UsersId], [Content], [EvaluateDate]) VALUES (12, 2, N'10240002', N'挺好的', CAST(N'2021-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Evaluate] ([EvaluateId], [OrderId], [UsersId], [Content], [EvaluateDate]) VALUES (13, 3, N'10240003', N'很不错', CAST(N'2021-01-01T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Evaluate] OFF
SET IDENTITY_INSERT [dbo].[EveryImg] ON 

INSERT [dbo].[EveryImg] ([ImgId], [UploadDate], [ImgUrl], [AdminID]) VALUES (1, CAST(N'2021-05-19T00:00:00.000' AS DateTime), N'aaa', N'000000000')
INSERT [dbo].[EveryImg] ([ImgId], [UploadDate], [ImgUrl], [AdminID]) VALUES (2, CAST(N'2021-05-19T00:00:00.000' AS DateTime), N'aaaqwe', N'000000000')
INSERT [dbo].[EveryImg] ([ImgId], [UploadDate], [ImgUrl], [AdminID]) VALUES (3, CAST(N'2021-05-25T07:53:55.797' AS DateTime), N'/Upload/EveryDayImg/2021-05-254b4fa88f-845f-423a-aeef-b63ab55bde2c.jpg', N'000000000')
INSERT [dbo].[EveryImg] ([ImgId], [UploadDate], [ImgUrl], [AdminID]) VALUES (4, CAST(N'2021-06-28T09:59:17.507' AS DateTime), N'/Upload/EveryDayImg/2021-06-28cfa0afb4-552f-48c7-aba7-603b4ab7e55c.png', N'000000000')
INSERT [dbo].[EveryImg] ([ImgId], [UploadDate], [ImgUrl], [AdminID]) VALUES (5, CAST(N'2021-11-01T20:20:51.293' AS DateTime), N'/Upload/EveryDayImg/2021-11-018849174c-9dc5-4296-b6b5-5b1aec8f39b0.jpg', N'000000000')
INSERT [dbo].[EveryImg] ([ImgId], [UploadDate], [ImgUrl], [AdminID]) VALUES (6, CAST(N'2022-02-25T16:43:56.187' AS DateTime), N'/Upload/EveryDayImg/2022-02-252a836c1f-b48e-4743-98bf-74048662e6a7.jpg', N'000000000')
SET IDENTITY_INSERT [dbo].[EveryImg] OFF
SET IDENTITY_INSERT [dbo].[Focus] ON 

INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (2, N'10240012', N'10240002')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (13, N'10240012', N'10240001')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (14, N'10240012', N'10240003')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (15, N'10240004', N'10240005')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (16, N'10240009', N'10240006')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (17, N'10240008', N'10240005')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (18, N'10240007', N'10240016')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (21, N'10240003', N'10240006')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (22, N'10240003', N'10240003')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (23, N'10240003', N'10240004')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (24, N'10240003', N'10240005')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (25, N'10240003', N'10240006')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (26, N'10240003', N'10240007')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (27, N'10240003', N'10240008')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (28, N'10240003', N'10240009')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (29, N'10240003', N'10240010')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (31, N'10240001', N'10240003')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (32, N'10240002', N'10240003')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (34, N'10240004', N'10240003')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (35, N'10240006', N'10240003')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (36, N'10240010', N'10240003')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (37, N'10240016', N'10240003')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (38, N'10240006', N'10240009')
INSERT [dbo].[Focus] ([FocusId], [UsersId], [FocusedUserId]) VALUES (39, N'10240002', N'10240008')
SET IDENTITY_INSERT [dbo].[Focus] OFF
SET IDENTITY_INSERT [dbo].[likeIt] ON 

INSERT [dbo].[likeIt] ([LikeId], [ProductionId], [UsersId]) VALUES (1, 27, N'10240002')
INSERT [dbo].[likeIt] ([LikeId], [ProductionId], [UsersId]) VALUES (2, 38, N'10240002')
SET IDENTITY_INSERT [dbo].[likeIt] OFF
SET IDENTITY_INSERT [dbo].[OrderApply] ON 

INSERT [dbo].[OrderApply] ([ApplyId], [UsersId], [QOrderId], [ApplyDescrib], [ApplyDate], [ApplyState]) VALUES (1, N'10240012', 10, N' 不想要！', CAST(N'2020-12-18T10:49:10.887' AS DateTime), N'已驳回              ')
INSERT [dbo].[OrderApply] ([ApplyId], [UsersId], [QOrderId], [ApplyDescrib], [ApplyDate], [ApplyState]) VALUES (2, N'10240002', 13, N' ', CAST(N'2021-01-02T11:56:10.610' AS DateTime), N'待审核              ')
INSERT [dbo].[OrderApply] ([ApplyId], [UsersId], [QOrderId], [ApplyDescrib], [ApplyDate], [ApplyState]) VALUES (3, N'10240002', 12, N'不理想', CAST(N'2020-01-01T00:00:00.000' AS DateTime), N'已驳回              ')
INSERT [dbo].[OrderApply] ([ApplyId], [UsersId], [QOrderId], [ApplyDescrib], [ApplyDate], [ApplyState]) VALUES (5, N'10240002', 11, N'不喜欢', CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'待审核              ')
INSERT [dbo].[OrderApply] ([ApplyId], [UsersId], [QOrderId], [ApplyDescrib], [ApplyDate], [ApplyState]) VALUES (6, N'10240002', 1, N'有瑕疵', CAST(N'2021-01-02T00:00:00.000' AS DateTime), N'待审核              ')
SET IDENTITY_INSERT [dbo].[OrderApply] OFF
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (1, N'10240002', N'10240008', CAST(200.00 AS Numeric(9, 2)), CAST(N'2020-12-10T10:22:47.987' AS DateTime), CAST(N'2020-12-31T00:00:00.000' AS DateTime), N'待接受    ', N'帮我写首诗', N'冬天的诗', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (2, N'10240007', N'10240002', CAST(200.00 AS Numeric(9, 2)), CAST(N'2020-12-10T10:25:30.530' AS DateTime), CAST(N'2020-12-31T00:00:00.000' AS DateTime), N'待验收    ', N'帮我做个视频', N'剪辑视频', CAST(N'2021-06-28T10:17:04.823' AS DateTime))
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (3, N'10240012', N'10240002', CAST(50.00 AS Numeric(9, 2)), CAST(N'2020-12-10T10:25:30.620' AS DateTime), CAST(N'2021-07-01T00:00:00.000' AS DateTime), N'完美交付  ', N'我想拍个校园短视频，关于什么巴拉巴拉', N'校园拍摄', CAST(N'2020-12-18T08:32:19.650' AS DateTime))
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (4, N'10240008', N'10240002', CAST(80.00 AS Numeric(9, 2)), CAST(N'2020-12-10T10:25:30.623' AS DateTime), CAST(N'2021-06-13T00:00:00.000' AS DateTime), N'待验收    ', N'拍个视频', N'街头短视频', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (5, N'10240008', N'10240002', CAST(80.00 AS Numeric(9, 2)), CAST(N'2020-03-29T00:00:00.000' AS DateTime), CAST(N'2020-06-27T00:00:00.000' AS DateTime), N'完美交付  ', N'拍个视频', N'小视频', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (6, N'10240008', N'10240002', CAST(80.00 AS Numeric(9, 2)), CAST(N'2020-12-22T00:00:00.000' AS DateTime), CAST(N'2021-06-29T00:00:00.000' AS DateTime), N'创作中    ', N'拍个视频', N'视频', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (7, N'10240008', N'10240002', CAST(80.00 AS Numeric(9, 2)), CAST(N'2020-06-23T00:00:00.000' AS DateTime), CAST(N'2020-12-31T00:00:00.000' AS DateTime), N'待验收    ', N'拍个视频', N'剪影视频', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (8, N'10240012', N'10240002', CAST(150.00 AS Numeric(9, 2)), CAST(N'2020-12-10T11:36:24.167' AS DateTime), CAST(N'2020-12-28T00:00:00.000' AS DateTime), N'待验收    ', N'帮我做个视频！一个月左右', N'视频制作', CAST(N'2020-12-24T09:02:25.323' AS DateTime))
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (9, N'10240012', N'10240002', CAST(80.00 AS Numeric(9, 2)), CAST(N'2020-12-10T22:53:02.917' AS DateTime), CAST(N'2020-12-29T00:00:00.000' AS DateTime), N'完美交付  ', N'帮我拍个视频', N'做视频哦', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (10, N'10240012', N'10240002', CAST(150.00 AS Numeric(9, 2)), CAST(N'2020-12-11T11:40:21.200' AS DateTime), CAST(N'2021-01-12T00:00:00.000' AS DateTime), N'完美交付  ', N'做个视频大佬', N'做个视频', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (11, N'10240002', N'10240008', CAST(280.00 AS Numeric(9, 2)), CAST(N'2020-12-18T08:50:09.703' AS DateTime), CAST(N'2021-01-14T00:00:00.000' AS DateTime), N'待接受    ', N' emm，元旦节的祝贺词', N'再写首诗', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (12, N'10240002', N'10240008', CAST(200.00 AS Numeric(9, 2)), CAST(N'2020-12-10T10:22:47.987' AS DateTime), CAST(N'2020-12-31T00:00:00.000' AS DateTime), N'完美交付  ', N'帮我写首诗,关于圣诞节的', N'冬天的诗(圣诞节)', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (13, N'10240002', N'10240012', CAST(120.00 AS Numeric(9, 2)), CAST(N'2020-12-18T10:55:22.390' AS DateTime), CAST(N'2020-12-24T00:00:00.000' AS DateTime), N'创作中    ', N'做个短视频', N'圣诞的视频', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (14, N'10240002', N'10240013', CAST(100000.00 AS Numeric(9, 2)), CAST(N'2020-12-18T11:03:33.527' AS DateTime), CAST(N'2020-12-24T00:00:00.000' AS DateTime), N'待接受    ', N' 圣诞赞歌的视频制作，图片已经发给你啦', N' 圣诞赞歌', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (15, N'10240012', N'10240002', CAST(80.00 AS Numeric(9, 2)), CAST(N'2020-12-24T08:02:10.000' AS DateTime), CAST(N'2020-12-31T00:00:00.000' AS DateTime), N'创作中    ', N'写一首诗庆元旦', N'元旦的诗', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (16, N'10240012', N'10240002', CAST(90.00 AS Numeric(9, 2)), CAST(N'2020-12-24T08:57:54.537' AS DateTime), CAST(N'2020-12-31T00:00:00.000' AS DateTime), N'创作中    ', N'做个视频', N'视频剪辑', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (17, N'10240012', N'10240002', CAST(100.00 AS Numeric(9, 2)), CAST(N'2021-01-03T17:06:47.943' AS DateTime), CAST(N'2021-01-06T00:00:00.000' AS DateTime), N'创作中    ', N'我来下单，写一首诗吧', N'庆元旦', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (18, N'10240012', N'10240002', CAST(100.00 AS Numeric(9, 2)), CAST(N'2021-01-03T17:07:39.787' AS DateTime), CAST(N'2021-01-08T00:00:00.000' AS DateTime), N'待接受    ', N'有个元旦拍的视频，帮我美化一下', N'元旦汇演美化', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (19, N'10240012', N'10240011', CAST(80.00 AS Numeric(9, 2)), CAST(N'2021-01-03T17:14:27.647' AS DateTime), CAST(N'2021-02-02T00:00:00.000' AS DateTime), N'待接受    ', N' 画个简笔画，自拍发给你了', N'我的素描', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (20, N'10240012', N'10240002', CAST(130.00 AS Numeric(9, 2)), CAST(N'2021-01-04T00:56:24.553' AS DateTime), CAST(N'2021-12-31T00:00:00.000' AS DateTime), N'待接受    ', N' 我想要一个跨年祝福视频', N'跨年', NULL)
INSERT [dbo].[Orders] ([OrderId], [UsersId], [CreatorId], [total_amt], [BuyDate], [FinishDate], [OrderState], [NeedDescrib], [Name], [ActualFinishDate]) VALUES (23, N'10240003', N'10240005', CAST(150.00 AS Numeric(9, 2)), CAST(N'2021-06-24T20:12:18.320' AS DateTime), CAST(N'2021-06-23T00:00:00.000' AS DateTime), N'待接受    ', N' adsa ', N'asdadadas', NULL)
SET IDENTITY_INSERT [dbo].[Orders] OFF
SET IDENTITY_INSERT [dbo].[PersonMsg] ON 

INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (1, CAST(N'2020-10-02T00:00:00.000' AS DateTime), N'10240010', N'10240011', N'你好,哆啦A梦。我是小樱')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (3, CAST(N'2020-10-24T00:00:00.000' AS DateTime), N'10240012', N'10240011', N'你好,哆啦A梦。我是鲁鲁修')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (7, CAST(N'2020-12-07T10:29:49.963' AS DateTime), N'10240012', N'10240010', N'小樱，我已收到！鲁鲁修敬上！')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (8, CAST(N'2020-12-07T10:30:39.643' AS DateTime), N'10240012', N'10240010', N'小樱，我已收到！鲁鲁修敬上！')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (10, CAST(N'2020-12-10T08:24:07.890' AS DateTime), N'10240012', N'10240002', N'??')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (12, CAST(N'2020-12-10T22:11:53.050' AS DateTime), N'10240012', N'10240002', N'在吗？')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (17, CAST(N'2020-12-14T16:04:48.010' AS DateTime), N'10240002', N'10240012', N'修哥，价格低了点吧。')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (18, CAST(N'2020-12-14T16:05:09.417' AS DateTime), N'10240002', N'10240007', N'犬夜叉，稍等。马上接')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (19, CAST(N'2020-12-17T19:29:42.337' AS DateTime), N'10240012', N'10240010', N'123')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (20, CAST(N'2020-12-17T19:49:25.457' AS DateTime), N'10240002', N'10240007', N'000')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (21, CAST(N'2020-12-18T08:26:13.683' AS DateTime), N'10240002', N'10240007', N'22')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (22, CAST(N'2020-12-18T11:02:40.990' AS DateTime), N'10240002', N'10240013', N'你好呀')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (23, CAST(N'2020-12-24T08:56:19.950' AS DateTime), N'10240012', N'10240002', N'??')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (24, CAST(N'2020-12-24T08:57:05.170' AS DateTime), N'10240012', N'10240002', N'??')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (25, CAST(N'2020-12-24T08:58:45.197' AS DateTime), N'10240012', N'10240010', N'小樱，我已收到！鲁鲁修敬上！')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (26, CAST(N'2020-12-24T10:39:30.240' AS DateTime), N'10240012', N'10240002', N'123')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (27, CAST(N'2020-12-25T17:09:30.817' AS DateTime), N'10240012', N'10240002', N'123')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (28, CAST(N'2020-12-28T09:49:59.797' AS DateTime), N'10240002', N'10240012', N'123456')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (31, CAST(N'2020-12-30T00:00:00.000' AS DateTime), N'10240001', N'10240003', N'你好')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (33, CAST(N'2021-04-01T08:13:07.310' AS DateTime), N'10240002', N'10240001', N'12312312')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (35, CAST(N'2021-06-24T20:15:47.060' AS DateTime), N'10240001', N'10240003', N'')
INSERT [dbo].[PersonMsg] ([PMId], [MsgDate], [SebderID], [ReceptID], [MsgContent]) VALUES (36, CAST(N'2021-06-28T08:08:02.173' AS DateTime), N'10240002', N'10240007', N'dasdas')
SET IDENTITY_INSERT [dbo].[PersonMsg] OFF
SET IDENTITY_INSERT [dbo].[Production] ON 

INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (1, N'10240007', N'云端', CAST(N'2020-08-15T00:00:00.000' AS DateTime), N'成立于2013年3月17日，由网友菊梦未醒、海妖弄潮、浮云天空待水凝、无风等人共同发起，社团创立以来，创作出了许多广播剧、原创歌曲以及填词翻唱歌曲。是一个风格多样的综合性非盈利网络社团。', N'音乐', 281, 1, 32, N'唯美图片', N'/image/index_img/人气佳作/人气佳作1/人气佳作1.jpg', 3, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (2, N'10240008', N'5月你好', CAST(N'2020-08-05T00:00:00.000' AS DateTime), N'生活再不如人意，都要学会自我温暖和慰藉，给自我多一点欣赏和鼓励。生活就是童话，只要心存完美，结局就会是完美。你好，五月!', N'文字', 16, 0, 0, NULL, N'/image/index_img/人气佳作/人气佳作2/人气佳作2.jpg', 10, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (3, N'10240009', N'杯', CAST(N'2020-03-18T00:00:00.000' AS DateTime), N'杯：bēi ㄅㄟˉ。（《说文解字》：“杯，?也。从木、否声 [1]  。”。在古文中“不、丕、否”皆可表示否定。古文中坏亦有作坯解 [2]  。）', N'图片', 3, 0, 0, NULL, N'/image/index_img/人气佳作/人气佳作3/人气佳作3.jpg', 5, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (4, N'10240010', N'松阳古村', CAST(N'2019-05-28T00:00:00.000' AS DateTime), N'古市镇位于松阳县西北部，松古平原腹地，南邻县城11公里，距丽水80公里；北邻遂昌县城15公里，距龙游76公里。建镇始于东汉四年（公元199年），县置于此，距今已有1800余年。古市镇是丽水市最古老的集镇。
全镇总面积36.07平方千米（2017年），辖30个行政村，5个居委会，21155人（2017年），为松阳县北部五乡一镇的经济、文化和商贸中心，是松阳县第二大镇。', N'视频', 1, 0, 0, NULL, N'/image/index_img/人气佳作/人气佳作4/人气佳作4.png', 2, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (5, N'10240011', N'童话小镇', CAST(N'2020-06-06T00:00:00.000' AS DateTime), N'美丽的童话小镇 ——丹麦城（Solvang)是美国加利福尼亚州圣巴巴拉下属的一个城市。是一个具有典型北欧风光的纯朴 袖珍 的小镇。小镇内有图画班的丹麦式建筑，丹麦风车 丹麦食品 葡萄酒 及丹麦特色工艺品。电影《杯酒人生》就是从这里拍摄的。', N'图片', 0, 0, 0, NULL, N'/image/index_img/人气佳作/人气佳作5/人气佳作5.png', 2, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (6, N'10240012', N'莲', CAST(N'2018-10-06T00:00:00.000' AS DateTime), N'《莲》是张艺兴于2020年6月1日发行的第四张个人专辑，共收录12首歌曲，制作人由张艺兴、Murda Beatz等担任 [1]  。
2020年7月11日，该专辑中的同名歌曲《莲》获得全球中文音乐榜上榜周冠军', N'视频', 3, 0, 0, NULL, N'/image/index_img/人气佳作/人气佳作17/人气佳作17.jpg', 2, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (7, N'10240013', N'天外来物', CAST(N'2020-10-06T00:00:00.000' AS DateTime), N'《天外来物》是薛之谦演唱的一首歌曲，由薛之谦作词，罗小黑作曲，周以力编曲，周以力、郑伟担任制作人，于2020年7月17日发行 [1]  ，与2020年12月31日收录于专辑《天外来物》。', N'音乐', 0, 0, 0, NULL, N'/image/index_img/人气佳作/人气佳作16/人气佳作16.jpg', 4, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (8, N'10240012', N'我的世界守则', CAST(N'2020-11-21T00:00:00.000' AS DateTime), N'《我的世界守则》是王一博演唱的一首歌曲，由王一博作词，24、Vince、CK、velvet作曲，于2020年12月30日发行', N'音乐', 2, 0, 0, NULL, N'/image/index_img/人气佳作/人气佳作15/人气佳作15.jpg', 4, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (9, N'10240006', N'ANYONE', CAST(N'2020-11-22T11:24:20.533' AS DateTime), N'1月1日13：00，超级巨星贾斯汀·比伯Justin Bieber 2021年全新专辑JB6的首支先行单曲《Anyone》于酷狗音乐重磅上线！这份惊喜，正是Justin Bieber在新年到来之际送给全球粉丝们的新年大礼！《Anyone》是一首特别的、充满希望的歌曲，Justin Bieber也借此新单曲与大家一起告别多灾多难的2020年，迎接更为光明和充满可能性的2021年。', N'音乐', 0, 0, 0, NULL, N'/image/index_img/人气佳作/人气佳作14/人气佳作14.jpg', 2, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (10, N'10240001', N'心地', CAST(N'2020-11-24T15:31:48.940' AS DateTime), N'辽鹤归来，故乡多少伤心地。寸书不寄。鱼浪空千里。凭仗桃根，说与凄凉意。愁无际。旧时衣袂。犹有东门泪。', N'图片', 3, 0, 0, N'唯美图片', N'/image/index_img/人气佳作/人气佳作6/人气佳作6.png', 2, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (11, N'10240001', N'牧', CAST(N'2020-11-25T22:12:05.027' AS DateTime), N'日暖泥融雪半消，行人芳草马声骄。九华山路云遮寺，清弋江村柳拂桥。君意如鸿高的的，我心悬旆正摇摇。同来不得同归去，故国逢春一寂寥！', N'图片', 14, 0, 0, N'唯美图片', N'/image/index_img/人气佳作/人气佳作7/人气佳作7.png', 4, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (12, N'10240012', N'初晨的瀑布', CAST(N'2020-11-30T08:10:30.057' AS DateTime), N'日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。', N'图片', 6, 0, 0, N'唯美图片', N'/image/index_img/人气佳作/人气佳作8/人气佳作8.png', 4, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (13, N'10240012', N'荆棘小姐', CAST(N'2020-11-30T08:41:41.983' AS DateTime), N'nyaikeya アザミ嬢のララバイ（中島みゆきさん）をKAITO（V3、WHISPER）オク下で歌わせていただきました。', N'音乐', 5, 0, 0, N'唯美图片', N'/image/index_img/人气佳作/人气佳作9/人气佳作9.jpg', 4, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (14, N'10240012', N'生活', CAST(N'2020-12-10T22:56:03.023' AS DateTime), N'少无适俗韵，性本爱丘山。误落尘网中，一去三十年。羁鸟恋旧林，池鱼思故渊。开荒南野际，守拙归园田。方宅十余亩，草屋八九间。榆柳荫后檐，桃李罗堂前。暧暧远人村，依依墟里烟。狗吠深巷中，鸡鸣桑树颠。户庭无尘杂，虚室有余闲。久在樊笼里，复得返自然。', N'图片', 3, 0, 0, N'唯美图片', N'/image/index_img/人气佳作/人气佳作10/人气佳作10.png', 2, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (15, N'10240002', N'always', CAST(N'2020-12-17T19:48:13.010' AS DateTime), N'<p>青海长云暗雪山，孤城遥望玉门关。 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;黄沙百战穿金甲，不破楼兰终不还。&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>', N'视频', 49, 1, 3, N'古墨水彩', N'/image/index_img/人气佳作/人气佳作11/人气佳作11.png', 22, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (16, N'10240002', N'海豚', CAST(N'2020-12-31T11:16:08.180' AS DateTime), N'胖乎乎的海豚,在水中旁若无人地自由嬉戏.只听驯养员一声哨响,它猛地跃起,随着水花四溅,在空中划出一道美丽的弧线,轻盈、欢快,博得四座一片叫好.', N'视频', 12, 0, 0, N'尔雅文字', N'/image/index_img/人气佳作/人气佳作12/人气佳作12.jpg', 2, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (17, N'10240007', N'晚霞', CAST(N'2021-01-01T20:06:22.317' AS DateTime), N'不仅是天空，连接收到它们亮光的屋子也充满了情趣，黑黑的屋子在靠近窗子的地方，瞬间被染成了粉红色，窗子的形状，投射在了地板上，有点不规则，像两座小山；这两座小山的周围，镶着一道镀金的边儿，金光闪闪，格外耀眼，整个屋子里，有了一种富丽堂皇，蓬荜生辉的气息。', N'音乐', 3, 0, 0, N'唯美图片', N'/image/index_img/人气佳作/人气佳作13/人气佳作13.png', 2, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (20, N'10240012', N'庚子春节答亲故', CAST(N'2021-01-03T16:41:00.010' AS DateTime), N'在新春之际，在新的一年的开始，我祝愿所有人一生平安，祝愿神州繁荣昌盛；希望这个崭新的一年能够充满辉煌，希望家人身体健康，希望自己拥有强健的体魄，取得优异的成绩，结识新的朋友……', N'文字', 2, 0, 0, N'尔雅文字', N'/image/index_img/人气佳作/人气佳作18/人气佳作18.jpg', 0, N'新年到了写首诗')
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (21, N'10240012', N'王者荣耀', CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'王者冬季杯开幕', N'视频', 7, 0, 0, NULL, N'/image/index_img/主题强推/主题强推2/主题强推2.jpg', 50, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (22, N'10240012', N'未来世界', CAST(N'2020-12-31T00:00:00.000' AS DateTime), NULL, N'图片', 1, 0, 0, NULL, N'/image/index_img/主题强推/主题强推1/主题强推1.jpg', 49, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (23, N'10240012', N'杀破狼', CAST(N'2020-12-12T00:00:00.000' AS DateTime), N'吴京个人秀', N'图片', 0, 0, 0, NULL, N'/image/index_img/主题强推/主题强推3/主题强推3.jpg', 47, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (24, N'10240012', N'仰望星辰', CAST(N'2020-12-31T00:00:00.000' AS DateTime), NULL, N'文字', 0, 0, 0, NULL, N'/image/index_img/主题强推/主题强推4/主题强推4.jpg', 48, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (25, N'10240013', N'2012', CAST(N'2020-12-29T00:00:00.000' AS DateTime), N'2012灾难来临', N'视频', 1, 2, 3, NULL, N'/image/index_img/人气佳作/人气佳作19/人气佳作19.jpg', 0, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (26, N'10240004', N'萌猫', CAST(N'2020-01-01T00:00:00.000' AS DateTime), N'猫本来就是一种可爱的生物', N'图片', 1, 1, 1, NULL, N'/image/index_img/人气佳作/人气佳作20/人气佳作20.jpg', 0, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (27, N'10240005', N'进击的巨人', CAST(N'2021-01-01T00:00:00.000' AS DateTime), N'《进击的巨人》第四季来袭', N'视频', 4, 1, 1, NULL, N'/image/index_img/人气佳作/人气佳作21/人气佳作21.jpg', 6, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (28, N'10240006', N'星际宝贝', CAST(N'2021-01-02T00:00:00.000' AS DateTime), N'星际宝贝', N'视频', 2, 1, 1, NULL, N'/image/index_img/人气佳作/人气佳作22/人气佳作22.jpg', 0, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (29, N'10240007', N'忠犬八公', CAST(N'2018-01-01T00:00:00.000' AS DateTime), NULL, N'视频', 2, 1, 1, NULL, N'/image/index_img/人气佳作/人气佳作23/人气佳作23.jpg', 0, NULL)
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (30, N'10240012', N'美少女', CAST(N'2021-01-04T00:53:33.743' AS DateTime), N'<p>加油！</p>', N'图片', 0, 0, 0, N'唯美图片', N'/image/CoverImg/2021-01-0408bf72d5-c2a6-4ce5-aa17-9244c114bfea.jpg', 0, N'这是一个属于美少女的世界')
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (31, N'10240012', N'朋友', CAST(N'2021-01-04T01:02:21.087' AS DateTime), N'<p>不仅要做一时的朋友，更要做一世的朋友，加油啊朋友们，我们向美好的生活进发！</p>', N'文字', 0, 0, 0, N'尔雅文字', N'/image/CoverImg/2021-01-04862e1c9d-1a1c-4bb1-9a3c-b07934f3226f.jpg', 0, N'friens')
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (32, N'10240007', N'星辰', CAST(N'2021-01-04T07:31:16.467' AS DateTime), N'<p>你就是我的小星星</p>', N'文字', 0, 0, 0, N'尔雅文字', N'/image/CoverImg/2021-01-0465e49628-0d0e-41f7-9812-c78d11719fc2.jpg', 0, N'小星星')
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (33, N'10240007', N'船', CAST(N'2021-01-04T07:32:55.257' AS DateTime), N'<p>船船船</p>', N'图片', 1, 0, 0, N'原创插画', N'/image/CoverImg/2021-01-049d049fe7-da1d-426e-ac6f-68278f5e45b2.png', 2, N'李白的船')
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (34, N'10240001', N'东国的雪', CAST(N'2021-01-04T07:50:50.550' AS DateTime), N'<p>雪象征着美好！</p>', N'图片', 1, 0, 0, N'唯美图片', N'/image/CoverImg/2021-01-045c4fa365-b76c-42bd-a633-c681c1f2f106.jpg', 0, N'雪')
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (35, N'10240001', N'运动', CAST(N'2021-01-04T07:52:58.057' AS DateTime), N'人人都爱运动', N'图片', 2, 0, 0, N'唯美图片', N'/image/index_img/人气佳作/人气佳作25/25.jpg', 0, N'运动')
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (36, N'10240002', N'html5响应式个人博客模板《初见》', CAST(N'2021-06-14T20:59:31.897' AS DateTime), N'<p style="margin-top: 20px; margin-bottom: 20px; padding: 0px; text-indent: 2em; color: rgb(0, 23, 55); font-family: &quot;Microsoft YaHei&quot;, Arial, Helvetica, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">《初见》响应式个人博客模板，初见惊艳，再见依然。集博客，相册，视频，个人简历，自带seo优化功能，自适应电脑，平板，手机,专为个人定制的个人博客模板。一共有两个版本：蓝色版预览地址：<a href="http://cj.ip3q.com/" target="_blank" style="margin: 0px; padding: 0px; text-decoration-line: none; color: rgb(0, 23, 55);">http://cj.ip3q.com/</a>&nbsp; 红色版预览地址：<a href="http://cj_red.ip3q.com/" target="_blank" style="margin: 0px; padding: 0px; text-decoration-line: none; color: rgb(0, 23, 55);">http://cj_red.ip3q.com/</a><br/><br/>首页可支持二级导航菜单、通用图文列表、图片展示可支持手机端滑动、响应式设计，适应手机，平板，电脑、搜索，支持多模型系统表查询，列表页有1、图文列表页，默认通用的图文展示方式 ；图片列表页，相册展示功能；视频列表页，视频功能；标签列表、以及所有文章列表。</p><p style="margin-top: 20px; margin-bottom: 20px; padding: 0px; text-indent: 2em; color: rgb(0, 23, 55); font-family: &quot;Microsoft YaHei&quot;, Arial, Helvetica, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);"><img alt="个人博客模板" src="http://127.0.0.1:8848/%E5%8D%9A%E5%AE%A2/%E5%8D%9A%E5%AE%A2/images/8756d3edc05efb4e4f95df12718f14aa.jpg"/></p><p><br/></p>', N'图片', 3, 0, 0, N'原创插画', N'/image/CoverImg/2021-06-14c691f051-d16e-45d5-94f4-e1de28fe94d6.jpg', 0, N'博客样式推荐')
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (37, N'10240009', N'如何让自己的网站更有质量？AB模板王有妙招', CAST(N'2021-06-18T15:36:35.740' AS DateTime), N'随着互联网的不断发展，对网站的要求越来越高，如何提高网站的质量，让自己在这个竞争激烈的市场中站稳自己的脚步呢?今天，AB模板王汇总了一些方式，希望对大家有帮助。
 
　　第一、建设网站前的市场分析
　　AB模板王告诉大家，在建设网站之前，要好好分析一下相关行业的市场是怎样的，然后结合自身的条件分析，给网站制定一个合理的规划。
 
　　第二、选择一个独立稳定的服务器
　　有的站长为了节约成本，使用了一个低廉的服务器，殊不知这样的服务器极不稳定，会导致用户迟迟打不开网页，他们是没有时间慢慢等待的，只会快速离开网站，增加网站的跳出率。
 
　　网站在刚刚建立的时候，就要到正规公司购买一个独立稳定的服务器，保证网站的正常运营速度，才会受到用户的亲睐。
 
　　第三、网页设计要简单明了
　　有的站长为了吸引用户的眼球，把网站设计得花枝招展，其实这样犯了一个严重的错误，用户进入网站之后感到眼花缭乱，很难找到自己需要的东西，他们只会立刻关闭网站，网站的跳出率会随之增多。
 
　　网站的结构尽量简洁一些，做到层次分明、中心明确、色调搭配合理等等，给用户舒服的感觉，才能留住更多的有效客户。
 ', N'音乐', 1, 0, 0, N'唯美图片', N'/image/CoverImg/2021-06-25605dabd4-b979-474e-8cd4-957a4ce85074.jpg', 0, N'随着互联网的不断发展，对网站的要求越来越高，如何提高网站的质量，让自己在这个竞争激烈的市场中站稳自己的脚步呢?今天，AB模板王汇总了一些方式，希望对大家有帮助。 第一、...')
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (38, N'10240002', N'带着seo思维选域名 建站就成功了一半', CAST(N'2021-06-18T15:40:51.373' AS DateTime), N'<p>
	<img alt="" src="/ueditor/net/upload/image/20210618/6375962760931357139466049.jpg" height="auto"/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src="/image/PContent_Img/20210618/6375962761677469016188849.jpg" title="1-1FFQ93552317-lp.jpg" alt="1-1FFQ93552317-lp.jpg" width="474" height="248"/></p><p><br/></p><p>
	对于网站来说，域名的选择尤为重要，有些人就不太在意这些，认为网站内容才是关键，这域名随便找个品牌拼音就成了。其实，域名的挑选还有不少名堂，织梦教程网高端网站建设中，常常会带着seo思维去选域名。</p><p>
	&nbsp;</p><p>
	(1)优先考虑品牌</p><p>
	好的域名并不会把行业词放在里面，就拿百度来说，字面上看与“搜索引擎”毫无关联，可就是国内搜索领域的龙头老大。可见，品牌名称与行业名称来得更重要，有些大公司就是根据品牌词来确定域名的。</p><p>
	&nbsp;</p><p>
	(2)域名的续费周期</p><p>
	其实，域名的续费周期对网站排名有一定的影响。客观来说，域名续费的周期越长，则说明站长花费在站点上的时间就越长，可见并不是一个垃圾站，可能是一个高质量网站。</p><p>
	&nbsp;</p><p>
	(3)域名的后缀</p><p>
	部分域名天生就能给网站带来高权重，比如大家熟悉的.gov/.edu。当然了，只有符合条件的才可以注册这种域名。我们可以选择国际通用的，比如.net/.com/.cn等等。</p><p>
	&nbsp;</p><p>
	(4)域名的出生时间</p><p>
	一个老域名比较值钱，域名注册的越早，对网站排名越有利。这就是为什么有些站长喜欢购买老域名来建站的原因。</p><p>
	&nbsp;</p><p>
	(5)首次收录时间</p><p>
	有过seo优化经验的朋友们应该清楚，域名第一次被搜索引擎收录非常重要。有些老域名没有解析，搜索引擎就不会收录其中的内容。虽然无法知道搜索引擎收录域名的确切时间，但可以使用互联网档案馆来查询网站的历史内容，比较有参考价值。</p><p>
	&nbsp;</p><p>
	(6)域名中包含关键词</p><p>
	对于英文站来说，通常会根据关键词来选购域名，会对谷歌排名有一定的影响。因为关键词形式的域名本身就有提升排名的效果，当有人转载文章时，无形之中就做了该关键词的锚文本。</p><p><br/></p>', N'图片', 5, 1, 0, N'古墨水彩', N'/image/CoverImg/2021-06-18605dabd4-b979-474e-8cd4-957a4ce85074.jpg', 0, N'对于网站来说，域名的选择尤为重要，有些人就不太在意这些，认为网站内容才是关键，这域名随便找个品牌拼音就成了。其实，域名的挑选还有不少名堂，织梦教程网高端网站建设中...')
INSERT [dbo].[Production] ([ProductionId], [PublisherNo], [ProductionName], [PublishDate], [ProductionContent], [ProductionType], [ViewCount], [LikeCount], [CommentCount], [Tag], [ImgUrl], [HotCount], [Describe]) VALUES (39, N'10240002', N'动漫插画', CAST(N'2021-06-28T08:22:41.333' AS DateTime), N'<p><img src="/image/BlogContent_Img/20210628/6376046532271352107598986.jpg" title="src=http _b-ssl.duitang.com_uploads_item_201507_17_20150717133159_SL2wm.jpeg&amp;refer=http _b-ssl.duitang.com&amp;app=2002&amp;size=f9999,10000&amp;q=a80&amp;n=0&amp;g=0n&amp;fmt=jpeg.jpg" alt="src=http _b-ssl.duitang.com_uploads_item_201507_17_20150717133159_SL2wm.jpeg&amp;refer=http _b-ssl.duitang.com&amp;app=2002&amp;size=f9999,10000&amp;q=a80&amp;n=0&amp;g=0n&amp;fmt=jpeg.jpg" width="686" height="352"/></p>', N'图片', 5, 0, 0, N'热血动漫', N'/image/CoverImg/2021-06-28eb742280-b936-47ff-b815-71362945b3f9.jpg', 0, N'强')
SET IDENTITY_INSERT [dbo].[Production] OFF
SET IDENTITY_INSERT [dbo].[PublicMsg] ON 

INSERT [dbo].[PublicMsg] ([PublicMsgId], [SenderId], [PublicMsgContent], [SendTime], [EndTime]) VALUES (1, N'000000000', N'Hi ，我是西西，热爱摇滚的宇宙驯鹿，从今天起，我们将在这里一直陪伴着你', CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2019-01-02T00:00:00.000' AS DateTime))
INSERT [dbo].[PublicMsg] ([PublicMsgId], [SenderId], [PublicMsgContent], [SendTime], [EndTime]) VALUES (2, N'000000001', N'你好，我是来自创世界最可爱的多多，这位是我的好伙伴西西，在微软小冰的帮助下，我们学会了你们人类的语言，do-mi', CAST(N'2019-01-02T00:00:00.000' AS DateTime), CAST(N'2019-01-03T00:00:00.000' AS DateTime))
INSERT [dbo].[PublicMsg] ([PublicMsgId], [SenderId], [PublicMsgContent], [SendTime], [EndTime]) VALUES (3, N'000000000', N'紧急通知！2021-05-28截止！', CAST(N'2021-05-19T11:42:39.153' AS DateTime), CAST(N'2021-05-28T00:00:00.000' AS DateTime))
INSERT [dbo].[PublicMsg] ([PublicMsgId], [SenderId], [PublicMsgContent], [SendTime], [EndTime]) VALUES (4, N'000000000', N'2312', CAST(N'2021-05-25T09:08:28.903' AS DateTime), CAST(N'2021-05-13T00:00:00.000' AS DateTime))
INSERT [dbo].[PublicMsg] ([PublicMsgId], [SenderId], [PublicMsgContent], [SendTime], [EndTime]) VALUES (5, N'000000000', N'123', CAST(N'2021-06-28T07:55:43.457' AS DateTime), CAST(N'2021-06-28T00:00:00.000' AS DateTime))
INSERT [dbo].[PublicMsg] ([PublicMsgId], [SenderId], [PublicMsgContent], [SendTime], [EndTime]) VALUES (10005, N'000000000', N'123213', CAST(N'2021-06-28T09:57:06.210' AS DateTime), CAST(N'2021-06-28T00:00:00.000' AS DateTime))
INSERT [dbo].[PublicMsg] ([PublicMsgId], [SenderId], [PublicMsgContent], [SendTime], [EndTime]) VALUES (10006, N'000000000', N'123', CAST(N'2022-03-02T10:27:13.223' AS DateTime), CAST(N'2022-03-23T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[PublicMsg] OFF
SET IDENTITY_INSERT [dbo].[Reply] ON 

INSERT [dbo].[Reply] ([ReplyId], [UsersId], [CommentId], [ReplyDate], [ReplyContent]) VALUES (1, N'10240003', 2, CAST(N'2020-12-26T15:04:23.963' AS DateTime), N'同感啊！')
INSERT [dbo].[Reply] ([ReplyId], [UsersId], [CommentId], [ReplyDate], [ReplyContent]) VALUES (2, N'10240003', 116, CAST(N'2021-06-25T09:33:23.017' AS DateTime), N'')
SET IDENTITY_INSERT [dbo].[Reply] OFF
SET IDENTITY_INSERT [dbo].[SysMsg] ON 

INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (2, N'000000000', N'10240008', N'尊敬的创作者，您有一份来自钱老八的订单，请尽快处理哦。', CAST(N'2020-12-18T09:46:29.193' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (8, N'000000000', N'10240003', N'请你接收来自创世界的一封信', CAST(N'2021-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (12, N'000000000', N'10240007', N'来创世界已经有两个月了，快来收下我的大礼吧！', CAST(N'2021-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (13, N'000000000', N'10240008', N'恭喜您成为创世界的vip用户，再接再厉哦！', CAST(N'2018-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (14, N'000000000', N'10240009', N'恭喜您成为创世界的vvip用户！', CAST(N'2019-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (17, N'000000000', N'10240002', N'尊敬的用户，您的反馈我们已处理，请您查看。', CAST(N'2021-05-18T10:39:53.357' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (18, N'000000000', N'10240002', N'没什么，就随便发发。', CAST(N'2021-05-19T09:25:28.427' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (19, N'000000000', N'10240013', N'发个消息试试！', CAST(N'2021-05-19T09:29:45.467' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (20, N'000000000', N'10240012', N'ASD ', CAST(N'2021-05-25T09:07:36.607' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (21, N'000000000', N'10240005', N'阿萨大大十大', CAST(N'2021-06-02T16:22:55.647' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (22, N'000000000', N'10240002', N'sdasda', CAST(N'2021-06-28T07:54:16.313' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (10022, N'000000000', N'10240002', N'撒大大', CAST(N'2021-06-28T09:55:22.147' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (10023, N'000000000', N'10240008', N'尊敬的创作者，您有一份来自幸运符号的订单，请尽快处理哦。', CAST(N'2021-06-28T10:14:30.273' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (10024, N'000000000', N'10240013', N'尊敬的创作者，您有一份来自幸运符号的订单，请尽快处理哦。', CAST(N'2021-11-01T13:59:22.320' AS DateTime))
INSERT [dbo].[SysMsg] ([SysMsgId], [SenderId], [ReceptId], [SysMsgContent], [SendTime]) VALUES (10025, N'000000000', N'10240002', N'youwenti', CAST(N'2021-11-01T20:15:46.880' AS DateTime))
SET IDENTITY_INSERT [dbo].[SysMsg] OFF
SET IDENTITY_INSERT [dbo].[Tag] ON 

INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (1, N'唯美图片', N'图片      ', N'''/image/index_img/标签/唯美图片.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (2, N'尔雅文字', N'文字      ', N'''/image/index_img/标签/尔雅文字.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (3, N'动感音乐', N'音乐      ', N'''/image/index_img/标签/动感音乐.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (4, N'炫酷剪辑', N'视频      ', N'''/image/index_img/标签/炫酷剪辑.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (5, N'古墨水彩', N'图片      ', N'''/image/index_img/标签/古墨水彩.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (6, N'热血动漫', N'图片      ', N'''/image/index_img/标签/热血动漫.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (7, N'原创插画', N'图片      ', N'''/image/index_img/标签/原创插画.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (9, N'即兴涂鸦', N'图片      ', N'''/image/index_img/标签/即兴涂鸦.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (11, N'经典名谣', N'音乐      ', N'''/image/index_img/标签/经典名谣.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (12, N'人气歌曲', N'音乐      ', N'''/image/index_img/标签/人气歌曲.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (13, N'儒雅古风', N'音乐      ', N'''/image/index_img/标签/儒雅古风.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (14, N'华语佳曲', N'音乐      ', N'''/image/index_img/标签/华语歌曲.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (15, N'说唱RAP', N'音乐      ', N'''/image/index_img/标签/说唱RAP.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (16, N'优美诗篇', N'文字      ', N'''/image/index_img/标签/优美诗篇.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (18, N'原创小说', N'文字      ', N'''/image/index_img/标签/原创小说.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (19, N'东方玄幻', N'文字      ', N'''/image/index_img/标签/东方玄幻.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (20, N'传统小说', N'文字      ', N'''/image/index_img/标签/传统小说.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (21, N'VLog', N'视频      ', N'''/image/index_img/标签/VLOG.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (24, N'动漫混剪', N'视频      ', N'''/image/index_img/标签/动漫混剪.jpg''')
INSERT [dbo].[Tag] ([LabelId], [LabelName], [LabelType], [LabelImg]) VALUES (25, N'摄影', N'视频      ', N'''/image/index_img/标签/摄影.jpg''')
SET IDENTITY_INSERT [dbo].[Tag] OFF
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240001', N'故辞', N'男', CAST(N'2020-01-01T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, N'唱歌', N'10240001', N'/image/index_img/head_img/1.jpg', 5, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240002', N'幸运符号', N'女', CAST(N'2000-05-15T00:00:00.000' AS DateTime), 1, 30, N'正常  ', 1, 0, N'看视频', N'10240002', N'/image/index_img/head_img/2.jpg', 53, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240003', N'江南过客', N'女', CAST(N'2021-06-15T00:00:00.000' AS DateTime), 1, 30, N'冻结  ', 2, 0, N'喷人', N'10240003', N'/image/index_img/head_img/3.jpg', 15, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240004', N'伱知道硪对伱de好°', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, N'未填写', NULL, N'/image/index_img/head_img/4.jpg', 1, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240005', N'。情罙特别の亽○●○', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, N'听歌', NULL, N'/image/index_img/head_img/5.jpg', 0, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240006', N'世勋 happy birthday', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, NULL, NULL, N'/image/index_img/head_img/6.jpg', 1, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240007', N'触不到的爱', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, N'听歌', N'10240007', N'/image/index_img/head_img/7.jpg', 1, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240008', N'醉沓', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, N'麻将', N'10240008', N'/image/index_img/head_img/8.jpg', 1, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240009', N'小鬼', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, N'摄影', N'10240009', N'/image/index_img/head_img/9.jpg', 1, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240010', N'想吃可爱熊的竹', N'女', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, N'摄像', N'10240010', N'/image/index_img/head_img/10.jpg', 1, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240011', N'凡若尘曦', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, N'绘画', N'10240011', N'/image/index_img/head_img/11.jpg', 1, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240012', N'南笙菇凉丶', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 30, N'冻结  ', 4, 0, N'视频剪辑', N'10240012', N'/image/index_img/head_img/12.jpg', 26, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240013', N'无情哈拉少', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, N'俊可小鸟伏特加', N'10240013', N'/image/index_img/head_img/13.jpg', 1, CAST(N'2020-01-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240014', N'王源', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, NULL, NULL, N'/image/index_img/head_img/14.jpg', 2, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240015', N'薛之谦', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, N'未填写', NULL, N'/image/index_img/head_img/15.jpg', 0, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240016', N'王龙', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, NULL, NULL, N'/image/index_img/head_img/16.jpg', 0, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240017', N'小李', N'男', CAST(N'2005-06-18T00:00:00.000' AS DateTime), 1, 100, N'正常  ', 0, 0, NULL, NULL, N'/image/index_img/head_img/17.jpg', 0, CAST(N'2019-12-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Users] ([UsersId], [UsersName], [Sex], [Birth], [UsersLevel], [Credit], [State], [OrderCount], [ChargebackCount], [Hobby], [CreatorId], [HeadUrl], [Exp], [RegisteDate]) VALUES (N'10240018', N'未命名', NULL, NULL, 1, 100, N'正常  ', 0, 0, N'未填写', NULL, N'/image/index_img/图片一.jpg', 0, CAST(N'2021-05-03T22:44:55.083' AS DateTime))
INSERT [dbo].[UsersLevel] ([UsersLevel], [LowExp], [HighExp]) VALUES (0, 0, 9)
INSERT [dbo].[UsersLevel] ([UsersLevel], [LowExp], [HighExp]) VALUES (1, 10, 29)
INSERT [dbo].[UsersLevel] ([UsersLevel], [LowExp], [HighExp]) VALUES (2, 30, 79)
INSERT [dbo].[UsersLevel] ([UsersLevel], [LowExp], [HighExp]) VALUES (3, 80, 199)
INSERT [dbo].[UsersLevel] ([UsersLevel], [LowExp], [HighExp]) VALUES (4, 200, 499)
INSERT [dbo].[UsersLevel] ([UsersLevel], [LowExp], [HighExp]) VALUES (5, 500, 999)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240001', N'1', N'12345678901', NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240002', N'654321', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240003', N'123456', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240004', N'123456', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240005', N'123456', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240006', N'123456', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240007', N'123456', N'10086', N'')
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240008', N'123456', N'', N'')
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240009', N'123456', N'', N'')
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240010', N'123456', N'', N'')
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240011', N'123456', N'', N'')
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240012', N'123456', N'', N'')
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240013', N'123456', N'', N'')
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240014', N'123456', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240015', N'123456', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240016', N'123456', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240017', N'123456', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'10240018', N'123456', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'12312312', N'123', NULL, NULL)
INSERT [dbo].[UsersLogin] ([UsersId], [Pwd], [Tel], [Email]) VALUES (N'123123123', N'123', NULL, NULL)
SET IDENTITY_INSERT [dbo].[Vote] ON 

INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (2, N'2021第一季度最强创客', N'快来选出你最心仪的创客吧。', CAST(N'2021-06-01T15:52:58.530' AS DateTime), CAST(N'1905-06-24T00:00:00.000' AS DateTime), N'/image/vote_img/user_vote/uvtqqosa.jpg', N'000000000', N'用户')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (3, N'2021五月佳作', N'正值春夏交替的五月，有没有那么一个作品，让你印象深刻。', CAST(N'2021-06-01T15:55:00.370' AS DateTime), CAST(N'1905-06-29T00:00:00.000' AS DateTime), N'/image/vote_img/production_vote/pvtsdzldi.jpg', N'000000000', N'作品')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (4, N'创世界打分', N'你对创世界还满意吗', CAST(N'2021-06-01T16:01:16.150' AS DateTime), CAST(N'1905-06-09T00:00:00.000' AS DateTime), N'/image/vote_img/normal_vote/pingjia.jpg', N'000000000', N'普通')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (6, N'用户投票测试', N'1111', CAST(N'2021-06-08T13:50:36.333' AS DateTime), CAST(N'2021-06-22T00:00:00.000' AS DateTime), N'aa', N'000000000', N'用户')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (7, N'作品投票测试', N'啊大苏打', CAST(N'2021-06-08T13:57:42.657' AS DateTime), CAST(N'2021-06-22T00:00:00.000' AS DateTime), N'aa', N'000000000', N'作品')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (8, N'用户投票测试1', N'阿大撒', CAST(N'2021-06-08T14:03:31.610' AS DateTime), CAST(N'2021-06-09T00:00:00.000' AS DateTime), N'aa', N'000000000', N'用户')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (9, N'作品投票测试2', N'阿松大', CAST(N'2021-06-08T14:04:07.527' AS DateTime), CAST(N'2021-06-09T00:00:00.000' AS DateTime), N'aa', N'000000000', N'作品')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (18, N'221请问', N'啊是的哇人', CAST(N'2021-06-09T14:27:51.080' AS DateTime), CAST(N'2021-06-16T00:00:00.000' AS DateTime), N'/Upload/VoteImg/VoteHeadImg/2021-06-091d3fa32b-2566-4fa9-8007-f2af1c70e5b5.jpg', N'000000000', N'用户')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (19, N'普通投票6.9', N'暗收', CAST(N'2021-06-09T14:43:28.473' AS DateTime), CAST(N'2021-06-16T00:00:00.000' AS DateTime), N'/Upload/VoteImg/VoteHeadImg/2021-06-09c6be67b9-b5e4-4651-ad7b-ddab9d92a5ce.jpg', N'000000000', N'普通')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (20, N'213', N'请问', CAST(N'2021-06-28T09:58:20.480' AS DateTime), CAST(N'2021-06-29T00:00:00.000' AS DateTime), N'/Upload/VoteImg/VoteHeadImg/2021-06-28f5c3072b-c5cb-4a36-91f1-448496844247.jpg', N'000000000', N'用户')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (21, N'1+1=?', N'wer', CAST(N'2021-11-01T20:17:22.103' AS DateTime), CAST(N'2021-11-10T00:00:00.000' AS DateTime), N'异常：未将对象引用设置到对象的实例。', N'000000000', N'普通')
INSERT [dbo].[Vote] ([VoteId], [Title], [Content], [BeginDate], [EndDate], [ImgUrl], [AdminID], [ReferenceType]) VALUES (22, N'最喜爱用户', N'哈哈', CAST(N'2021-11-01T20:18:48.843' AS DateTime), CAST(N'2021-11-26T00:00:00.000' AS DateTime), N'异常：StartIndex 不能小于 0。
参数名: startIndex', N'000000000', N'用户')
SET IDENTITY_INSERT [dbo].[Vote] OFF
SET IDENTITY_INSERT [dbo].[Voted] ON 

INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (1, NULL, NULL, N'10240001', 2)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (2, NULL, NULL, N'10240002', 2)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (3, NULL, NULL, N'10240004', 2)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (4, NULL, NULL, N'10240005', 2)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (5, NULL, NULL, N'10240006', 2)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (6, NULL, NULL, N'10240007', 2)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (7, NULL, NULL, N'10240008', 2)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (8, NULL, NULL, N'10240009', 2)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (9, NULL, NULL, N'10240010', 2)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (10, NULL, NULL, N'10240014', 2)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (11, NULL, NULL, N'1', 3)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (12, NULL, NULL, N'2', 3)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (13, NULL, NULL, N'3', 3)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (14, NULL, NULL, N'5', 3)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (15, NULL, NULL, N'6', 3)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (16, NULL, NULL, N'7', 3)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (17, NULL, NULL, N'9', 3)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (18, NULL, NULL, N'10', 3)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (19, N'十分满意鸭！', N'/image/vote_img/normal_voted/QQ图片20210601210010.gif', NULL, 4)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (20, N'一般般海星叭。', N'/image/vote_img/normal_voted/sadaddgdf.jpg', NULL, 4)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (21, N'八太星啦。', N'/image/vote_img/normal_voted/QQ图片20210601210001.gif', NULL, 4)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (22, N'简直拉跨！', N'/image/vote_img/normal_voted/QQ图片20210601210005.gif', NULL, 4)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (23, NULL, NULL, N'10240001', 6)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (24, NULL, NULL, N'10240002', 6)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (25, NULL, NULL, N'10240004', 6)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (26, NULL, NULL, N'10240008', 6)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (27, NULL, NULL, N'10240009', 6)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (28, NULL, NULL, N'1', 7)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (29, NULL, NULL, N'2', 7)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (30, NULL, NULL, N'3', 7)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (31, NULL, NULL, N'8', 7)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (32, NULL, NULL, N'9', 7)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (33, NULL, NULL, N'10240001', 8)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (34, NULL, NULL, N'10240002', 8)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (35, NULL, NULL, N'10240001', 9)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (36, NULL, NULL, N'10240002', 9)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (54, NULL, NULL, N'10240001', 18)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (55, NULL, NULL, N'10240002', 18)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (56, N'那没事了', N'/Upload/VoteImg/VotedImg/2021-06-09855f6450-216a-4cc1-90c1-586a3a7e6424.jpg', N'', 19)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (57, NULL, NULL, N'10240001', 20)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (58, NULL, NULL, N'10240002', 20)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (59, NULL, NULL, N'10240003', 20)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (60, NULL, NULL, N'10240007', 20)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (61, NULL, NULL, N'10240013', 20)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (62, N'2', N'异常：未将对象引用设置到对象的实例。', N'', 21)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (63, NULL, NULL, N'10240001', 22)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (64, NULL, NULL, N'10240002', 22)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (65, NULL, NULL, N'10240008', 22)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (66, NULL, NULL, N'10240012', 22)
INSERT [dbo].[Voted] ([VotedId], [Detail], [ImgUrl], [ReferenceId], [VoteId]) VALUES (67, NULL, NULL, N'10240017', 22)
SET IDENTITY_INSERT [dbo].[Voted] OFF
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (2, 1, CAST(N'2021-06-01T22:45:04.020' AS DateTime), N'10240005')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (2, 6, CAST(N'2021-06-25T12:38:45.603' AS DateTime), N'10240003')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (2, 7, CAST(N'2021-06-25T13:24:44.010' AS DateTime), N'10240008')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (3, 12, CAST(N'2021-06-01T22:50:39.490' AS DateTime), N'10240005')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (3, 13, CAST(N'2021-06-25T13:00:26.370' AS DateTime), N'10240003')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (4, 19, CAST(N'2021-06-01T21:53:40.137' AS DateTime), N'10240005')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (4, 19, CAST(N'2021-06-25T13:00:35.567' AS DateTime), N'10240003')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (4, 19, CAST(N'2021-06-25T13:02:07.920' AS DateTime), N'10240006')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (4, 19, CAST(N'2021-06-28T10:19:35.580' AS DateTime), N'10240002')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (4, 21, CAST(N'2021-06-25T13:24:27.787' AS DateTime), N'10240008')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (7, 28, CAST(N'2021-06-25T12:09:27.537' AS DateTime), N'10240003')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (7, 30, CAST(N'2021-06-25T13:24:36.707' AS DateTime), N'10240008')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (18, 54, CAST(N'2021-06-25T12:08:47.567' AS DateTime), N'10240003')
INSERT [dbo].[VoteDetail] ([VoteId], [VotedId], [VoteTime], [VoterId]) VALUES (21, 62, CAST(N'2021-11-01T20:19:40.010' AS DateTime), N'10240002')
ALTER TABLE [dbo].[Admin] ADD  CONSTRAINT [DF_Admin_EntryTime]  DEFAULT (getdate()) FOR [EntryTime]
GO
ALTER TABLE [dbo].[Applys] ADD  CONSTRAINT [DF_Applys_ApplysDate]  DEFAULT (getdate()) FOR [ApplysDate]
GO
ALTER TABLE [dbo].[AuthenApply] ADD  CONSTRAINT [DF_AuthenApply_AuthenApplyState]  DEFAULT ('待审核') FOR [AuthenApplyState]
GO
ALTER TABLE [dbo].[Blog] ADD  CONSTRAINT [DF_Blog_PublishDate]  DEFAULT (getdate()) FOR [PublishDate]
GO
ALTER TABLE [dbo].[Blog] ADD  CONSTRAINT [DF_Blog_ViewCount]  DEFAULT ((0)) FOR [ViewCount]
GO
ALTER TABLE [dbo].[Blog] ADD  CONSTRAINT [DF_Blog_Address]  DEFAULT ('未填写') FOR [Address]
GO
ALTER TABLE [dbo].[BlogComment] ADD  CONSTRAINT [DF_BlogComment_CommentDate]  DEFAULT (getdate()) FOR [CommentDate]
GO
ALTER TABLE [dbo].[Comments] ADD  CONSTRAINT [DF_Comments_CommentDate]  DEFAULT (getdate()) FOR [CommentDate]
GO
ALTER TABLE [dbo].[Creator] ADD  CONSTRAINT [DF_Creator_CreatorCredit]  DEFAULT ((100)) FOR [CreatorCredit]
GO
ALTER TABLE [dbo].[Creator] ADD  CONSTRAINT [DF_Creator_State]  DEFAULT ('正常') FOR [State]
GO
ALTER TABLE [dbo].[Creator] ADD  CONSTRAINT [DF_Creator_CreatorLevel]  DEFAULT ((1)) FOR [CreatorLevel]
GO
ALTER TABLE [dbo].[Creator] ADD  CONSTRAINT [DF_Creator_FinishedCount]  DEFAULT ((0)) FOR [FinishedCount]
GO
ALTER TABLE [dbo].[Creator] ADD  CONSTRAINT [DF_Creator_EfctCmpltCnt]  DEFAULT ((0)) FOR [EfctCmpltCnt]
GO
ALTER TABLE [dbo].[Evaluate] ADD  CONSTRAINT [DF_Evaluate_EvaluateDate]  DEFAULT (getdate()) FOR [EvaluateDate]
GO
ALTER TABLE [dbo].[EveryImg] ADD  CONSTRAINT [DF_EveryImg_UploadDate]  DEFAULT (getdate()) FOR [UploadDate]
GO
ALTER TABLE [dbo].[Orders] ADD  CONSTRAINT [DF_Orders_BuyDate]  DEFAULT (getdate()) FOR [BuyDate]
GO
ALTER TABLE [dbo].[Orders] ADD  CONSTRAINT [DF_Orders_OrderState]  DEFAULT ('待接受') FOR [OrderState]
GO
ALTER TABLE [dbo].[Production] ADD  CONSTRAINT [DF_Production_PublishDate]  DEFAULT (getdate()) FOR [PublishDate]
GO
ALTER TABLE [dbo].[Production] ADD  CONSTRAINT [DF_Production_ViewCount]  DEFAULT ((0)) FOR [ViewCount]
GO
ALTER TABLE [dbo].[Production] ADD  CONSTRAINT [DF_Production_LikeCount]  DEFAULT ((0)) FOR [LikeCount]
GO
ALTER TABLE [dbo].[Production] ADD  CONSTRAINT [DF_Production_CommentCount]  DEFAULT ((0)) FOR [CommentCount]
GO
ALTER TABLE [dbo].[Production] ADD  CONSTRAINT [DF_Production_ImgUrl]  DEFAULT ('/image/index_img/01.jpg') FOR [ImgUrl]
GO
ALTER TABLE [dbo].[Production] ADD  CONSTRAINT [DF_Production_HotCount]  DEFAULT ((0)) FOR [HotCount]
GO
ALTER TABLE [dbo].[RcptAddress] ADD  CONSTRAINT [DF_RcptAddress_IsDefault]  DEFAULT ((0)) FOR [IsDefault]
GO
ALTER TABLE [dbo].[Reply] ADD  CONSTRAINT [DF_Reply_ReplyDate]  DEFAULT (getdate()) FOR [ReplyDate]
GO
ALTER TABLE [dbo].[ShopEvaluate] ADD  CONSTRAINT [DF_ShopEvaluate_EvaDate]  DEFAULT (getdate()) FOR [EvaDate]
GO
ALTER TABLE [dbo].[ShopOrder] ADD  CONSTRAINT [DF_ShopOrder_BuyDate]  DEFAULT (getdate()) FOR [BuyDate]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_UsersName]  DEFAULT ('无名氏') FOR [UsersName]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_UsersLevel]  DEFAULT ((0)) FOR [UsersLevel]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_Credit]  DEFAULT ((100)) FOR [Credit]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_State]  DEFAULT ('正常') FOR [State]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_OrderCount]  DEFAULT ((0)) FOR [OrderCount]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_ChargebackCount]  DEFAULT ((0)) FOR [ChargebackCount]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_Hobby]  DEFAULT ('未填写') FOR [Hobby]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_HeadUrl]  DEFAULT (N'~/image/index_img/图片一.jpg') FOR [HeadUrl]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_Exp]  DEFAULT ((0)) FOR [Exp]
GO
ALTER TABLE [dbo].[Vote] ADD  CONSTRAINT [DF_Vote_BeginDate]  DEFAULT (getdate()) FOR [BeginDate]
GO
ALTER TABLE [dbo].[VoteDetail] ADD  CONSTRAINT [DF_VoteDetail_VoteTime]  DEFAULT (getdate()) FOR [VoteTime]
GO
ALTER TABLE [dbo].[Applys]  WITH CHECK ADD  CONSTRAINT [FK__Applys__UsersId__02E7657A] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Applys] CHECK CONSTRAINT [FK__Applys__UsersId__02E7657A]
GO
ALTER TABLE [dbo].[AuthenApply]  WITH CHECK ADD  CONSTRAINT [FK__AuthenApp__Users__06B7F65E] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[AuthenApply] CHECK CONSTRAINT [FK__AuthenApp__Users__06B7F65E]
GO
ALTER TABLE [dbo].[Blog]  WITH CHECK ADD  CONSTRAINT [FK__Blog__PublisherI__37661AB1] FOREIGN KEY([PublisherID])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Blog] CHECK CONSTRAINT [FK__Blog__PublisherI__37661AB1]
GO
ALTER TABLE [dbo].[BlogComment]  WITH CHECK ADD  CONSTRAINT [FK__BlogComme__BlogI__5125ECB4] FOREIGN KEY([BlogID])
REFERENCES [dbo].[Blog] ([BlogID])
GO
ALTER TABLE [dbo].[BlogComment] CHECK CONSTRAINT [FK__BlogComme__BlogI__5125ECB4]
GO
ALTER TABLE [dbo].[BlogComment]  WITH CHECK ADD  CONSTRAINT [FK__BlogComme__Comme__5031C87B] FOREIGN KEY([CommenterID])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[BlogComment] CHECK CONSTRAINT [FK__BlogComme__Comme__5031C87B]
GO
ALTER TABLE [dbo].[Collect]  WITH CHECK ADD  CONSTRAINT [FK__Collect__Product__09946309] FOREIGN KEY([ProductionId])
REFERENCES [dbo].[Production] ([ProductionId])
GO
ALTER TABLE [dbo].[Collect] CHECK CONSTRAINT [FK__Collect__Product__09946309]
GO
ALTER TABLE [dbo].[Collect]  WITH CHECK ADD  CONSTRAINT [FK__Collect__UsersId__0A888742] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Collect] CHECK CONSTRAINT [FK__Collect__UsersId__0A888742]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK__Comments__Commen__592635D8] FOREIGN KEY([CommenterId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK__Comments__Commen__592635D8]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK__Comments__Produc__5A1A5A11] FOREIGN KEY([ProductionId])
REFERENCES [dbo].[Production] ([ProductionId])
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK__Comments__Produc__5A1A5A11]
GO
ALTER TABLE [dbo].[Creator]  WITH CHECK ADD  CONSTRAINT [FK__Creator__PriceRa__173876EA] FOREIGN KEY([CreatorId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Creator] CHECK CONSTRAINT [FK__Creator__PriceRa__173876EA]
GO
ALTER TABLE [dbo].[Evaluate]  WITH CHECK ADD  CONSTRAINT [FK__Evaluate__OrderI__15FA39EE] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([OrderId])
GO
ALTER TABLE [dbo].[Evaluate] CHECK CONSTRAINT [FK__Evaluate__OrderI__15FA39EE]
GO
ALTER TABLE [dbo].[Evaluate]  WITH CHECK ADD  CONSTRAINT [FK__Evaluate__UsersI__150615B5] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Evaluate] CHECK CONSTRAINT [FK__Evaluate__UsersI__150615B5]
GO
ALTER TABLE [dbo].[EveryImg]  WITH CHECK ADD  CONSTRAINT [FK__EveryImg__AdminI__47B19113] FOREIGN KEY([AdminID])
REFERENCES [dbo].[Admin] ([AdminId])
GO
ALTER TABLE [dbo].[EveryImg] CHECK CONSTRAINT [FK__EveryImg__AdminI__47B19113]
GO
ALTER TABLE [dbo].[Focus]  WITH CHECK ADD  CONSTRAINT [FK__Focus__FocusedUs__0E591826] FOREIGN KEY([FocusedUserId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Focus] CHECK CONSTRAINT [FK__Focus__FocusedUs__0E591826]
GO
ALTER TABLE [dbo].[Focus]  WITH CHECK ADD  CONSTRAINT [FK__Focus__UsersId__0D64F3ED] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Focus] CHECK CONSTRAINT [FK__Focus__UsersId__0D64F3ED]
GO
ALTER TABLE [dbo].[likeIt]  WITH CHECK ADD  CONSTRAINT [FK__likeIt__Producti__25276EE5] FOREIGN KEY([ProductionId])
REFERENCES [dbo].[Production] ([ProductionId])
GO
ALTER TABLE [dbo].[likeIt] CHECK CONSTRAINT [FK__likeIt__Producti__25276EE5]
GO
ALTER TABLE [dbo].[likeIt]  WITH CHECK ADD  CONSTRAINT [FK__likeIt__UsersId__261B931E] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[likeIt] CHECK CONSTRAINT [FK__likeIt__UsersId__261B931E]
GO
ALTER TABLE [dbo].[OrderApply]  WITH CHECK ADD  CONSTRAINT [FK__OrderAppl__QOrde__7F16D496] FOREIGN KEY([QOrderId])
REFERENCES [dbo].[Orders] ([OrderId])
GO
ALTER TABLE [dbo].[OrderApply] CHECK CONSTRAINT [FK__OrderAppl__QOrde__7F16D496]
GO
ALTER TABLE [dbo].[OrderApply]  WITH CHECK ADD  CONSTRAINT [FK__OrderAppl__Users__7E22B05D] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[OrderApply] CHECK CONSTRAINT [FK__OrderAppl__Users__7E22B05D]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK__Orders__CreatorI__40257DE4] FOREIGN KEY([CreatorId])
REFERENCES [dbo].[Creator] ([CreatorId])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK__Orders__CreatorI__40257DE4]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK__Orders__UsersId__3F3159AB] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK__Orders__UsersId__3F3159AB]
GO
ALTER TABLE [dbo].[PersonMsg]  WITH CHECK ADD  CONSTRAINT [FK__PearsonMs__Recep__2D12A970] FOREIGN KEY([ReceptID])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[PersonMsg] CHECK CONSTRAINT [FK__PearsonMs__Recep__2D12A970]
GO
ALTER TABLE [dbo].[PersonMsg]  WITH CHECK ADD  CONSTRAINT [FK__PearsonMs__Sebde__2C1E8537] FOREIGN KEY([SebderID])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[PersonMsg] CHECK CONSTRAINT [FK__PearsonMs__Sebde__2C1E8537]
GO
ALTER TABLE [dbo].[Production]  WITH CHECK ADD  CONSTRAINT [production_Primarykey] FOREIGN KEY([PublisherNo])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Production] CHECK CONSTRAINT [production_Primarykey]
GO
ALTER TABLE [dbo].[PublicMsg]  WITH CHECK ADD  CONSTRAINT [FK__PublicMsg__Sende__68336F3E] FOREIGN KEY([SenderId])
REFERENCES [dbo].[Admin] ([AdminId])
GO
ALTER TABLE [dbo].[PublicMsg] CHECK CONSTRAINT [FK__PublicMsg__Sende__68336F3E]
GO
ALTER TABLE [dbo].[RcptAddress]  WITH CHECK ADD  CONSTRAINT [FK__RcptAddre__Users__0638D371] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[RcptAddress] CHECK CONSTRAINT [FK__RcptAddre__Users__0638D371]
GO
ALTER TABLE [dbo].[Reply]  WITH CHECK ADD  CONSTRAINT [FK__Reply__CommentId__4B2D1C3C] FOREIGN KEY([CommentId])
REFERENCES [dbo].[Comments] ([CommentId])
GO
ALTER TABLE [dbo].[Reply] CHECK CONSTRAINT [FK__Reply__CommentId__4B2D1C3C]
GO
ALTER TABLE [dbo].[Reply]  WITH CHECK ADD  CONSTRAINT [FK__Reply__UsersId__4A38F803] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[Reply] CHECK CONSTRAINT [FK__Reply__UsersId__4A38F803]
GO
ALTER TABLE [dbo].[ShopCart]  WITH CHECK ADD  CONSTRAINT [FK__ShopCart__SubID__157B1701] FOREIGN KEY([SubID])
REFERENCES [dbo].[SProductSubClass] ([SubID])
GO
ALTER TABLE [dbo].[ShopCart] CHECK CONSTRAINT [FK__ShopCart__SubID__157B1701]
GO
ALTER TABLE [dbo].[ShopCart]  WITH CHECK ADD  CONSTRAINT [FK__ShopCart__UsersI__166F3B3A] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[ShopCart] CHECK CONSTRAINT [FK__ShopCart__UsersI__166F3B3A]
GO
ALTER TABLE [dbo].[ShopEvaluate]  WITH CHECK ADD  CONSTRAINT [FK__ShopEvalu__Order__129EAA56] FOREIGN KEY([OrderID])
REFERENCES [dbo].[ShopOrder] ([OrderID])
GO
ALTER TABLE [dbo].[ShopEvaluate] CHECK CONSTRAINT [FK__ShopEvalu__Order__129EAA56]
GO
ALTER TABLE [dbo].[ShopEvaluate]  WITH CHECK ADD  CONSTRAINT [FK__ShopEvalu__Users__11AA861D] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[ShopEvaluate] CHECK CONSTRAINT [FK__ShopEvalu__Users__11AA861D]
GO
ALTER TABLE [dbo].[ShopInfoMore]  WITH CHECK ADD  CONSTRAINT [FK__ShopInfoM__Produ__007FFA1B] FOREIGN KEY([ProductID])
REFERENCES [dbo].[ShopProduct] ([ProductID])
GO
ALTER TABLE [dbo].[ShopInfoMore] CHECK CONSTRAINT [FK__ShopInfoM__Produ__007FFA1B]
GO
ALTER TABLE [dbo].[ShopOrder]  WITH CHECK ADD  CONSTRAINT [FK__ShopOrder__AddID__0A096455] FOREIGN KEY([AddID])
REFERENCES [dbo].[RcptAddress] ([AddID])
GO
ALTER TABLE [dbo].[ShopOrder] CHECK CONSTRAINT [FK__ShopOrder__AddID__0A096455]
GO
ALTER TABLE [dbo].[ShopOrder]  WITH CHECK ADD  CONSTRAINT [FK__ShopOrder__Users__0915401C] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[ShopOrder] CHECK CONSTRAINT [FK__ShopOrder__Users__0915401C]
GO
ALTER TABLE [dbo].[ShopOrderDetail]  WITH CHECK ADD  CONSTRAINT [FK__ShopOrder__Order__0DD9F539] FOREIGN KEY([OrderID])
REFERENCES [dbo].[ShopOrder] ([OrderID])
GO
ALTER TABLE [dbo].[ShopOrderDetail] CHECK CONSTRAINT [FK__ShopOrder__Order__0DD9F539]
GO
ALTER TABLE [dbo].[ShopOrderDetail]  WITH CHECK ADD  CONSTRAINT [FK__ShopOrder__SubID__0ECE1972] FOREIGN KEY([SubID])
REFERENCES [dbo].[SProductSubClass] ([SubID])
GO
ALTER TABLE [dbo].[ShopOrderDetail] CHECK CONSTRAINT [FK__ShopOrder__SubID__0ECE1972]
GO
ALTER TABLE [dbo].[ShopProduct]  WITH CHECK ADD  CONSTRAINT [FK__ShopProdu__TagId__7DA38D70] FOREIGN KEY([TagId])
REFERENCES [dbo].[ShopProductTag] ([TagId])
GO
ALTER TABLE [dbo].[ShopProduct] CHECK CONSTRAINT [FK__ShopProdu__TagId__7DA38D70]
GO
ALTER TABLE [dbo].[ShopProduct]  WITH CHECK ADD  CONSTRAINT [FK__ShopProdu__TypeI__7CAF6937] FOREIGN KEY([TypeID])
REFERENCES [dbo].[ShopProductType] ([TypeID])
GO
ALTER TABLE [dbo].[ShopProduct] CHECK CONSTRAINT [FK__ShopProdu__TypeI__7CAF6937]
GO
ALTER TABLE [dbo].[SProductSubClass]  WITH CHECK ADD  CONSTRAINT [FK__SProductS__Produ__035C66C6] FOREIGN KEY([ProductID])
REFERENCES [dbo].[ShopProduct] ([ProductID])
GO
ALTER TABLE [dbo].[SProductSubClass] CHECK CONSTRAINT [FK__SProductS__Produ__035C66C6]
GO
ALTER TABLE [dbo].[SysMsg]  WITH CHECK ADD  CONSTRAINT [FK__SysMsg__ReceptId__6C040022] FOREIGN KEY([ReceptId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[SysMsg] CHECK CONSTRAINT [FK__SysMsg__ReceptId__6C040022]
GO
ALTER TABLE [dbo].[SysMsg]  WITH CHECK ADD  CONSTRAINT [FK__SysMsg__SenderId__6B0FDBE9] FOREIGN KEY([SenderId])
REFERENCES [dbo].[Admin] ([AdminId])
GO
ALTER TABLE [dbo].[SysMsg] CHECK CONSTRAINT [FK__SysMsg__SenderId__6B0FDBE9]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK__Users__UsersId__1273C1CD] FOREIGN KEY([UsersId])
REFERENCES [dbo].[UsersLogin] ([UsersId])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK__Users__UsersId__1273C1CD]
GO
ALTER TABLE [dbo].[Vote]  WITH CHECK ADD  CONSTRAINT [FK__Vote__AdminID__0E7913B7] FOREIGN KEY([AdminID])
REFERENCES [dbo].[Admin] ([AdminId])
GO
ALTER TABLE [dbo].[Vote] CHECK CONSTRAINT [FK__Vote__AdminID__0E7913B7]
GO
ALTER TABLE [dbo].[Voted]  WITH CHECK ADD  CONSTRAINT [FK__Voted__VoteId__11558062] FOREIGN KEY([VoteId])
REFERENCES [dbo].[Vote] ([VoteId])
GO
ALTER TABLE [dbo].[Voted] CHECK CONSTRAINT [FK__Voted__VoteId__11558062]
GO
ALTER TABLE [dbo].[VoteDetail]  WITH CHECK ADD  CONSTRAINT [FK__VoteDetai__Voted__3F1C4B12] FOREIGN KEY([VotedId])
REFERENCES [dbo].[Voted] ([VotedId])
GO
ALTER TABLE [dbo].[VoteDetail] CHECK CONSTRAINT [FK__VoteDetai__Voted__3F1C4B12]
GO
ALTER TABLE [dbo].[VoteDetail]  WITH CHECK ADD  CONSTRAINT [FK__VoteDetai__VoteI__3E2826D9] FOREIGN KEY([VoteId])
REFERENCES [dbo].[Vote] ([VoteId])
GO
ALTER TABLE [dbo].[VoteDetail] CHECK CONSTRAINT [FK__VoteDetai__VoteI__3E2826D9]
GO
ALTER TABLE [dbo].[VoteDetail]  WITH CHECK ADD  CONSTRAINT [FK__VoteDetai__Voter__40106F4B] FOREIGN KEY([VoterId])
REFERENCES [dbo].[Users] ([UsersId])
GO
ALTER TABLE [dbo].[VoteDetail] CHECK CONSTRAINT [FK__VoteDetai__Voter__40106F4B]
GO
ALTER TABLE [dbo].[Admin]  WITH CHECK ADD  CONSTRAINT [cAdminTyp] CHECK  (([AdminType]='高级管理员' OR [AdminType]='普通管理员' OR [AdminType]='业务管理员'))
GO
ALTER TABLE [dbo].[Admin] CHECK CONSTRAINT [cAdminTyp]
GO
ALTER TABLE [dbo].[Applys]  WITH CHECK ADD  CONSTRAINT [cApplysState] CHECK  (([ApplysState]='待审核' OR [ApplysState]='已审核'))
GO
ALTER TABLE [dbo].[Applys] CHECK CONSTRAINT [cApplysState]
GO
ALTER TABLE [dbo].[AuthenApply]  WITH CHECK ADD  CONSTRAINT [cAuthenApplyState] CHECK  (([AuthenApplyState]='已通过' OR [AuthenApplyState]='待审核' OR [AuthenApplyState]='已驳回'))
GO
ALTER TABLE [dbo].[AuthenApply] CHECK CONSTRAINT [cAuthenApplyState]
GO
ALTER TABLE [dbo].[Blog]  WITH CHECK ADD  CONSTRAINT [CBlog1] CHECK  (([BlogType]='资源分享' OR [BlogType]='干货分享' OR [BlogType]='经验分享'))
GO
ALTER TABLE [dbo].[Blog] CHECK CONSTRAINT [CBlog1]
GO
ALTER TABLE [dbo].[Creator]  WITH CHECK ADD  CONSTRAINT [CCreator1] CHECK  (([State]='冻结' OR [State]='正常'))
GO
ALTER TABLE [dbo].[Creator] CHECK CONSTRAINT [CCreator1]
GO
ALTER TABLE [dbo].[OrderApply]  WITH CHECK ADD  CONSTRAINT [cApplyState] CHECK  (([ApplyState]='已通过' OR [ApplyState]='待审核' OR [ApplyState]='已驳回'))
GO
ALTER TABLE [dbo].[OrderApply] CHECK CONSTRAINT [cApplyState]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [COrderState] CHECK  (([OrderState]='已退单' OR [OrderState]='待验收' OR [OrderState]='待接受' OR [OrderState]='完美交付' OR [OrderState]='创作中'))
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [COrderState]
GO
ALTER TABLE [dbo].[Production]  WITH CHECK ADD  CONSTRAINT [cProductionType] CHECK  (([ProductionType]='文字' OR [ProductionType]='音乐' OR [ProductionType]='视频' OR [ProductionType]='图片'))
GO
ALTER TABLE [dbo].[Production] CHECK CONSTRAINT [cProductionType]
GO
ALTER TABLE [dbo].[ShopOrder]  WITH CHECK ADD  CONSTRAINT [CShopOrder] CHECK  (([BuyState]='已评价' OR [BuyState]='交易失败' OR [BuyState]='已签收' OR [BuyState]='已支付' OR [BuyState]='待支付'))
GO
ALTER TABLE [dbo].[ShopOrder] CHECK CONSTRAINT [CShopOrder]
GO
ALTER TABLE [dbo].[Tag]  WITH CHECK ADD  CONSTRAINT [CLabel] CHECK  (([LabelType]='文字' OR [LabelType]='音乐' OR [LabelType]='视频' OR [LabelType]='图片'))
GO
ALTER TABLE [dbo].[Tag] CHECK CONSTRAINT [CLabel]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [CUsers1] CHECK  (([Sex]='女' OR [Sex]='男'))
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [CUsers1]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [CUsers2] CHECK  (([State]='冻结' OR [State]='正常'))
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [CUsers2]
GO
ALTER TABLE [dbo].[Vote]  WITH CHECK ADD  CONSTRAINT [CVote1] CHECK  (([ReferenceType]='作品' OR [ReferenceType]='用户' OR [ReferenceType]='普通'))
GO
ALTER TABLE [dbo].[Vote] CHECK CONSTRAINT [CVote1]
GO
/****** Object:  StoredProcedure [dbo].[All_MyFocus_Works_View]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--5.创建存储过程展示我关注的所有人的所有作品（降序）
create proc [dbo].[All_MyFocus_Works_View] @U_ID varchar(10)
as
select *
from Production
where PublisherNo in 
(select b.UsersId
from Focus a,Users b
where a.UsersId=@U_ID and a.FocusedUserId=b.UsersId
)

GO
/****** Object:  StoredProcedure [dbo].[Proc_Get_Works]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--4.创建存储过程获得对应用户发布的所有作品
create proc [dbo].[Proc_Get_Works]   @U_ID varchar(10)
as
select *
from Production
where PublisherNo=@U_ID

GO
/****** Object:  StoredProcedure [dbo].[proc_init_CommentCount]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--创建存储过程，设置作品评论数等于当前评论表中对应的评论个数
create proc [dbo].[proc_init_CommentCount]
as
update Production
set CommentCount=(
select count(ProductionId)
from Comments
where Production.ProductionId=Comments.ProductionId
)

GO
/****** Object:  StoredProcedure [dbo].[proc_init_HotCoun]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--2.创建存储过程，根据输入的作品号，初始化作品热度(根据相应热度计算方法，点赞+1(找不到没办法了，评论+3，收藏+2))
create proc  [dbo].[proc_init_HotCoun] @Work_ID int
as
declare @comment_count int
declare @collect_count int
declare @tot_hot int
select @comment_count=count(CommentId) from Comments where ProductionId=@Work_ID
select @collect_count=count(CollectId) from Collect where ProductionId=@Work_ID
update Production
set HotCount=@comment_count*3+@collect_count*2
where ProductionId=@Work_ID

GO
/****** Object:  StoredProcedure [dbo].[proc_init_UserLevel]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--3.创建存储过程，初始化用户等级
create proc [dbo].[proc_init_UserLevel]
as
update Users
	set UsersLevel=
	(select b.UsersLevel
     from Users a,UsersLevel b
     where a.Exp between b.LowExp and b.HighExp)  --between设置其等级为对应经验范围等级

GO
/****** Object:  StoredProcedure [dbo].[Users_FoucusMe_View]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--6.创建存储过程筛选出所有关注我的人(包含用户id,用户名，爱好)
create proc [dbo].[Users_FoucusMe_View] @U_ID varchar(10)
as
select b.UsersId,b.UsersName,Hobby
from Focus a,Users b
where a.FocusedUserId=@U_ID and a.UsersId=b.UsersId

GO
/****** Object:  Trigger [dbo].[Production_Delete]    Script Date: 2022/4/30 12:51:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create trigger  [dbo].[Production_Delete]
on [dbo].[Production]
for delete 
as
begin

   --在删除此外键对应的作品
   delete Reply from Reply a,deleted b where a.CommentId=b.ProductionId
   delete Collect from Collect a,deleted b where a.ProductionId=b.ProductionId
   delete likeIt from likeIt a,deleted b where a.ProductionId=b.ProductionId
   delete Comments  from Comments a,deleted b where a.ProductionId=b.ProductionId
   delete Production from Production a,deleted b where a.ProductionId=b.ProductionId 
end
GO
ALTER TABLE [dbo].[Production] ENABLE TRIGGER [Production_Delete]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[58] 4[4] 2[30] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Users"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 273
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Production"
            Begin Extent = 
               Top = 175
               Left = 48
               Bottom = 338
               Right = 283
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Hot_Good_Works'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Hot_Good_Works'
GO
USE [master]
GO
ALTER DATABASE [TheCreation] SET  READ_WRITE 
GO
