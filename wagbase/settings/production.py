from .base import *

DEBUG = False

# Enable offline compression in production
COMPRESS_OFFLINE = True

try:
    from .local import *
except ImportError:
    pass
