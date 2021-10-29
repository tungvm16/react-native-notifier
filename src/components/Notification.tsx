import React from 'react';
import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  TextStyle,
  ImageStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';

import SafeContainer from './SafeContainer';


export interface NotificationComponentProps {
  /** Passed to `<Image />` as `source` param.
   * @default null */
  imageSource?: ImageSourcePropType;

  /** The maximum number of lines to use for rendering title.
   * @default null */
  maxTitleLines?: number;

  /** The maximum number of lines to use for rendering description.
   * @default null */
  maxDescriptionLines?: number;

  /** A container of the component. Set it in case you use different SafeAreaView than the standard
   * @default SafeAreaView */
  ContainerComponent?: React.ElementType;

  /** The style to use for rendering title
   * @default null */
  titleStyle?: StyleProp<TextStyle>;

  /** The style to use for rendering description
   * @default null */
  descriptionStyle?: StyleProp<TextStyle>;

  /** The style to use for notification container.
   * Might be useful to change background color, shadows, paddings or margins
   * @default null */
  containerStyle?: StyleProp<ViewStyle>;

  /** The style to use for notification container.
   * Might be useful to change background color, shadows, paddings or margins
   * @default null */
  contentStyle?: StyleProp<ViewStyle>;

  /** The style to use for notification container.
   * Might be useful to change background color, shadows, paddings or margins
   * @default null */
  viewNotifieAt?: StyleProp<ViewStyle>;

  /** The style to use for notification container.
   * Might be useful to change background color, shadows, paddings or margins
   * @default null */
  viewContentStyle?: StyleProp<ViewStyle>;

  /** The style to use for rendering image
   * @default null */
  imageStyle?: StyleProp<ImageStyle>;
}

interface NotificationComponentAllProps extends NotificationComponentProps {
  title?: string;
  description?: string;
  notifiedAt?: string;
  brandName?: string;
}

const NotificationComponent: React.FunctionComponent<NotificationComponentAllProps> = ({
  title,
  description,
  imageSource,
  ContainerComponent,
  containerStyle,
  notifiedAt,
  imageStyle,
  viewNotifieAt,
  viewContentStyle,
  titleStyle,

}) => {
  const Container = ContainerComponent ?? SafeContainer;

  return (
    <Container>
      <View style={containerStyle}>
        {/* @ts-ignore */}
        <Image style={imageStyle} source={imageSource} />
        <View style={viewContentStyle}>
          {title ? <Text style={titleStyle}>{title}</Text> : null}
          <Text >{description}</Text>
        </View>
        <View style={viewNotifieAt}>
          <Text style={{ color: '#161616' }}>{notifiedAt}</Text>
        </View>
      </View>
      <View style={{ width: 30, height: 3, backgroundColor: '#cec8c8', borderRadius: 1.5, alignSelf: 'center' }} />
    </Container>
  );
};

export default NotificationComponent;
